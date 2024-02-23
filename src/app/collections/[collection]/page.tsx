import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CollectionPage({ params }: { params: { collection: string } }) {
	const collection = await getProductsByCollectionSlug(params.collection);
	if (!collection) {
		return notFound();
	}

	return (
		<>
			<h1 className="mb-2 text-4xl font-bold italic">Kolekcja {collection.name}</h1>
			<ProductList products={collection.products} />
		</>
	);
}
