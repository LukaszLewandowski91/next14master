import { executeGraphQL } from "@/api/graphqlApi";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

// take: number, offset: number

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, {});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const data = await executeGraphQL(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});

	return data.categories[0]?.products;
};

export const getProductById = async (productId: ProductListItemFragment["id"]) => {
	const { product } = await executeGraphQL(ProductGetByIdDocument, { id: productId });

	return product;
};
