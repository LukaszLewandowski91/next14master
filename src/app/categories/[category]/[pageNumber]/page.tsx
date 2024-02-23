import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/organisms/Pagination";

export default async function CategoriesPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(params.category);
	if (!products) {
		throw notFound();
	}
	const numberofPages = Math.ceil(products?.length / 4);

	return (
		<>
			<ProductList
				products={products.slice(
					(parseInt(params.pageNumber) - 1) * 4,
					parseInt(params.pageNumber) * 4,
				)}
			/>
			<Pagination numberOfPages={numberofPages} href={`categories/${params.category}`} />
		</>
	);
}
