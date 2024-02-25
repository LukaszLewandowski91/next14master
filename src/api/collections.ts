import { executeGraphQL } from "@/api/graphqlApi";
import { CollectionGetBySlugDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionsGetListDocument,
		variables: {},
	});

	return graphqlResponse.collections.data;
};

export const getCollectionNameBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionGetBySlugDocument,
		variables: { slug },
	});

	return graphqlResponse.collection;
};
