import { executeGraphQL } from "@/api/graphqlApi";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

// take: number, offset: number

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, { take, skip });

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphQL(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});

	return graphqlResponse.category?.products;
};

export const getProductById = async (productId: ProductListItemFragment["id"]) => {
	const { product } = await executeGraphQL(ProductGetByIdDocument, { id: productId });

	return product;
};
