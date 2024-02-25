"use server";

import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphQL({
		query: CartSetProductQuantityDocument,
		variables: { cartId, productId, quantity },
		next: { tags: ["cart"] },
	});
	revalidateTag("cart");
};
