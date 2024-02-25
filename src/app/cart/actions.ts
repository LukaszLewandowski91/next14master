"use server";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	return executeGraphQL(CartSetProductQuantityDocument, { cartId, productId, quantity });
};
