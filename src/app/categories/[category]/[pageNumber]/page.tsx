import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/organisms/Pagination";
import { getCategoryNameBySlug } from "@/api/categories";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}) => {
	const category = await getCategoryNameBySlug(params.category);
	if (!category) {
		throw notFound();
	}
	return {
		title: `Kategoria ${category} - Sklep internetowy`,
		description: `Produkty z kategorii ${category}`,
		openGraph: {
			title: `Kategoria ${category} - Sklep internetowy`,
			description: `Produkty z kategorii ${category}`,
		},
	};
};

export default async function CategoriesPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(params.category);
	if (!products) {
		throw notFound();
	}
	const numberOfPages = Math.ceil(products?.length / 4);

	return (
		<>
			<h1 className="pb-20 text-4xl font-extrabold first-letter:uppercase" role="heading">
				{products[0]?.categories[0]?.name}
			</h1>
			<ProductList
				products={products.slice(
					(parseInt(params.pageNumber) - 1) * 4,
					parseInt(params.pageNumber) * 4,
				)}
			/>
			<Pagination numberOfPages={numberOfPages} href={`categories/${params.category}`} />
		</>
	);
}
