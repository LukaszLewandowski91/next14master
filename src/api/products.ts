import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

// take: number, offset: number

const executeGraphQL = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("process.env.GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphQLResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphQLResponse.errors) {
		throw TypeError(`GraphQL Error`, { cause: graphQLResponse.errors });
	}

	return graphQLResponse.data;
};

export const getProductsList = async (): Promise<ProductItemType[]> => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, {});

	return graphqlResponse.products.map((product) => {
		return {
			id: product.id,
			name: product.name,
			category: product.categories[0]?.name || "",
			price: product.price,
			coverImage: product.images[0] && {
				src: product.images[0]?.url,
				alt: product.name,
			},
			description: product.description,
		};
	});
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
};
