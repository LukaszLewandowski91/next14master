"use server";

import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";

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
