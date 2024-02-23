import { executeGraphQL } from "@/api/graphqlApi";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphQL(CollectionsGetListDocument, {});

	return graphqlResponse.collections.data;
};
