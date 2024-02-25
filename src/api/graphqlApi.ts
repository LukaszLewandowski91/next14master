import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphQL = async <TResult, TVariables>({
	query,
	variables,
	next,
	cache,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	next?: NextFetchRequestConfig | undefined;
	cache?: RequestCache;
	headers?: HeadersInit;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("process.env.GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		next,
		cache,
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphQLResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphQLResponse.errors) {
		console.log(graphQLResponse);
		throw TypeError(`GraphQL Error`, { cause: graphQLResponse.errors });
	}

	return graphQLResponse.data;
};
