import { cookies } from "next/headers";
import { executeGraphQL } from "@/api/graphqlApi";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	CartAddProductDocument,
	CartSetProductQuantityDocument,
} from "@/gql/graphql";

export async function getOrCreateCart() {
	const cart = await getCartFromCookies();
	if (cart) {
		return cart;
	}

	const { cartFindOrCreate: newCart } = await executeGraphQL({
		query: CartCreateDocument,
		variables: {},
		cache: "no-store",
	});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id, {
		maxAge: 60 * 60 * 24 * 2,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
	});
	return newCart;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return null;
	}

	const { cart: cart } = await executeGraphQL({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});
	return cart;
}
export async function addProductToCart(cartId: string, productId: string) {
	const currentCart = await executeGraphQL({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: { tags: ["cart"] },
		cache: "no-store",
	});

	if (currentCart.cart?.items.length === 0) {
		await executeGraphQL({
			query: CartAddProductDocument,
			variables: { cartId, productId },
			next: { tags: ["cart"] },
			cache: "no-store",
		});
	} else if (currentCart.cart?.items.some((item) => item.product.id === productId)) {
		const product = currentCart.cart.items.find((item) => item.product.id === productId);
		if (!product) {
			throw new Error("Product not found");
		}
		await executeGraphQL({
			query: CartSetProductQuantityDocument,
			variables: {
				cartId,
				productId,
				quantity: product.quantity + 1,
			},
			next: { tags: ["cart"] },
			cache: "no-store",
		});
	} else {
		await executeGraphQL({
			query: CartAddProductDocument,
			variables: { cartId, productId },
			next: { tags: ["cart"] },
			cache: "no-store",
		});
	}
}
