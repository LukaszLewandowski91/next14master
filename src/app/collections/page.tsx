import Link from "next/link";
import { getCollectionsList } from "@/api/collections";

export default async function CollectionPage() {
	const collections = await getCollectionsList();

	return (
		<>
			{collections.map((collection) => (
				<Link href={`/collections/${collection.slug}`} key={collection.slug}>
					{collection.name}
				</Link>
			))}
		</>
	);
}
