import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionNameBySlug } from "@/api/collections";

export const generateMetadata = async ({ params }: { params: { collection: string } }) => {
	const collection = await getCollectionNameBySlug(params.collection);
	if (!collection) {
		throw notFound();
	}

	return {
		title: `${collection.name}`,
		description: `Produkty z kategorii ${collection.name}}`,
		openGraph: {
			title: `${collection.name}`,
			description: `${collection.name}`,
		},
	};
};

export default async function CollectionPage({ params }: { params: { collection: string } }) {
	const collection = await getProductsByCollectionSlug(params.collection);
	if (!collection) {
		return notFound();
	}

	return (
		<>
			<h1 className="mb-2 text-4xl font-bold italic">{collection.name}</h1>
			<ProductList products={collection.products} />
		</>
	);
}
