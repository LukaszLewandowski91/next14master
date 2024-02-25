import { redirect } from "next/navigation";
import { executeGraphQL } from "@/api/graphqlApi";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetBySearchInputDocument,
} from "@/gql/graphql";

// take: number, offset: number

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: { take, skip },
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
		},
	});

	return graphqlResponse.category?.products;
};

export const getProductById = async (productId: ProductListItemFragment["id"]) => {
	const { product } = await executeGraphQL({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	return product;
};

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: collectionSlug,
		},
	});

	return graphqlResponse.collection;
};

export const getProductsBySearchQuery = async (searchInput: string) => {
	if (!searchInput) {
		redirect("/");
	}
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetBySearchInputDocument,
		variables: { searchInput },
	});
	if (!graphqlResponse.products) {
		redirect("/");
	}
	return graphqlResponse.products.data;
};
