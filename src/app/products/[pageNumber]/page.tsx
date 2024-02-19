import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateStaticParams() {
	const products = await getProductsList(200, 0);
	const numOfPages = Math.ceil(products.length / 20);
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { pageNumber: page.toString() } }));
}

export default async function ProductsPagePagination({
	params,
}: {
	params: { pageNumber: string };
}) {
	const products = await getProductsList(20, parseInt(params.pageNumber) - 1);
	const total = products.length;
	const numberOfPages = Math.ceil(total / 4);

	return (
		<>
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</>
	);
}
