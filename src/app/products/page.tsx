import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPagePagination({
	params,
}: {
	params: { pageNumber: string };
}) {
	const offset = parseInt(params.pageNumber) - 1;
	const products = await getProductsList(20, offset);
	const total = products.length;
	const numberOfPages = Math.ceil(total / 4);

	return (
		<>
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</>
	);
}
