import Link from "next/link";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionsList } from "@/api/collections";

export default async function HomePage() {
	const products = await getProductsList(4, 0);
	const collections = await getCollectionsList();

	return (
		<>
			<ProductList products={products.data.slice(0, 4)} />

			{collections.map((collection) => (
				<Link href={`/collections/${collection.slug}`} key={collection.slug} role="heading">
					{collection.name}
				</Link>
			))}
		</>
	);
}
