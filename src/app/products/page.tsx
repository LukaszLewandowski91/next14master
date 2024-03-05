import { getProductsList } from "@/api/products";
import { Sorting } from "@/ui/atoms/Sorting";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPagePagination({
	searchParams,
}: {
	searchParams: { orderBy: string; order: string };
}) {
	const products = await getProductsList(4, 0, undefined, undefined);
	const total = products.meta.total;
	const numberOfPages = Math.ceil(total / 4);
	return (
		<>
			<Sorting pageNumber={"1"} />
			<ProductList products={products.data} />
			<Pagination numberOfPages={numberOfPages} href="products" searchParams={searchParams} />
		</>
	);
}
