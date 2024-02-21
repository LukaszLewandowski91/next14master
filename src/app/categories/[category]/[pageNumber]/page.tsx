import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoriesPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(params.category);

	if (!products) {
		throw notFound();
	}
	return (
		<>
			<ProductList products={products} />
		</>
	);
}
