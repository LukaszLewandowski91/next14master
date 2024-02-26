import { cookies } from "next/headers";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartGetByIdDocument, CartCreateDocument, CartAddProductDocument } from "@/gql/graphql";

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
	await executeGraphQL({
		query: CartAddProductDocument,
		variables: { cartId, productId },
		next: { tags: ["cart"] },
		cache: "no-store",
	});
}
