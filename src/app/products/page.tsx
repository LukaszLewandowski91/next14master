import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPagePagination() {
	const products = await getProductsList(4, 0);
	const total = products.meta.total;
	const numberOfPages = Math.ceil(total / 4);

	return (
		<>
			<ProductList products={products.data} />
			<Pagination numberOfPages={numberOfPages} href="products" />
		</>
	);
}
