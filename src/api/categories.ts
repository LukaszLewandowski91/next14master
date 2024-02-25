import { executeGraphQL } from "@/api/graphqlApi";
import { CategoryGetBySlugDocument } from "@/gql/graphql";

export const getCategoryNameBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CategoryGetBySlugDocument,
		variables: {
			slug,
		},
	});

	return graphqlResponse.category?.name;
};
