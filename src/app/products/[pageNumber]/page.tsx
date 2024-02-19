import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPagePagination({
	params,
}: {
	params: { pageNumber: string };
}) {
	const products = await getProductsList(parseInt(params.pageNumber) - 1);
	const total = products.length;
	const numberOfPages = Math.ceil(total / 4);

	return (
		<>
			<ProductList products={products} />
			<Pagination numberOfPages={numberOfPages} />
		</>
	);
}
