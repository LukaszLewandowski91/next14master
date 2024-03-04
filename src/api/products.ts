import { redirect } from "next/navigation";
import { executeGraphQL } from "@/api/graphqlApi";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetBySearchInputDocument,
	ReviewsGetByProductIdDocument,
	ReviewCreateDocument,
} from "@/gql/graphql";

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: { take, skip },
		next: {
			revalidate: 15,
		},
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
		next: {
			revalidate: 1,
		},
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

export const getReviewsByProductId = async (productId: string) => {
	const graphqlResponse = await executeGraphQL({
		query: ReviewsGetByProductIdDocument,
		variables: {
			id: productId,
		},
	});

	return graphqlResponse.product;
};

export const addReview = async (
	author: string,
	rating: number,
	description: string,
	title: string,
	productId: string,
	email: string,
) => {
	const graphqlResponse = await executeGraphQL({
		query: ReviewCreateDocument,
		variables: {
			author: author,
			title: title,
			description: description,
			email: email,
			rating: rating,
			productId: productId,
		},
	});

	return graphqlResponse.reviewCreate.id;
};
