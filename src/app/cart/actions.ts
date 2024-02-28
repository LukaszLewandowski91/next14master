"use server";

import { revalidateTag } from "next/cache";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";
import { getCartFromCookies } from "@/api/cart";

export const removeItem = async (cartId: string, productId: string) => {
	await executeGraphQL({
		query: CartRemoveProductDocument,
		variables: { cartId, productId },
		next: { tags: ["cart"] },
	});
	revalidateTag("cart");
};

export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphQL({
		query: CartSetProductQuantityDocument,
		variables: { cartId, productId, quantity },
		next: { tags: ["cart"] },
	});
	revalidateTag("cart");
};

export async function handlePaymentAction() {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}
	const cart = await getCartFromCookies();
	if (!cart) {
		return;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product.name,
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		// success_url: `http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		// cancel_url: "http://localhost:3000/cart/cancel",
		success_url:
			process.env.NODE_ENV === "production"
				? `${process.env.SUCCESS_URL}?sessionId={CHECKOUT_SESSION_ID}`
				: `http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url:
			process.env.NODE_ENV === "production"
				? process.env.CANCEL_URL
				: "http://localhost:3000/cart/cancel",
	});

	if (!checkoutSession.url) {
		throw new Error("Something went wrong with the payment session");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
