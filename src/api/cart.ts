import { cookies } from "next/headers";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartGetByIdDocument, CartCreateDocument, CartAddProductDocument } from "@/gql/graphql";

export async function getOrCreateCart() {
	const cart = await getCartFromCookies();
	if (cart) {
		return cart;
	}

	const { cartFindOrCreate: newCart } = await executeGraphQL(CartCreateDocument, {});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id, {
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

	const { cart: cart } = await executeGraphQL(CartGetByIdDocument, {
		id: cartId,
	});
	return cart;
}
export async function addProductToCart(cartId: string, productId: string) {
	await executeGraphQL(CartAddProductDocument, { cartId, productId });
}
