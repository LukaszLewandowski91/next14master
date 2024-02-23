import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionsList } from "@/api/collections";

export const generateMetadata = async ({ params }: { params: { collection: string } }) => {
	const collections = await getCollectionsList();
	if (!collections) {
		throw notFound();
	}
	collections.filter((collection) => collection.slug === params.collection);
	return {
		title: `Kolekcja ${collections[0]?.name} - Sklep internetowy`,
		description: `Produkty z kategorii ${collections[0]?.name}`,
		openGraph: {
			title: `Kategoria ${collections[0]?.name} - Sklep internetowy`,
			description: `Produkty z kategorii ${collections[0]?.name}`,
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
