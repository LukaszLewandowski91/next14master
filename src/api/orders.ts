import { executeGraphQL } from "@/api/graphqlApi";
import { OrdersCreateDocument, OrdersGetByEmailDocument } from "@/gql/graphql";

export async function createOrder(cartId: string, email: string) {
	await executeGraphQL({
		query: OrdersCreateDocument,
		variables: {
			cartId,
			email,
		},
		next: {
			tags: ["order"],
		},
		cache: "no-store",
	});
}

export async function getOrders(email: string) {
	const orders = await executeGraphQL({
		query: OrdersGetByEmailDocument,
		variables: {
			email,
		},
		next: {
			tags: ["order"],
		},
		cache: "no-store",
	});
	return orders;
}
