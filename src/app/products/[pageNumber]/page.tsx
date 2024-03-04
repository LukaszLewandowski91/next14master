import { getProductsList } from "@/api/products";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";
import { Sorting } from "@/ui/atoms/Sorting";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

// export async function generateStaticParams() {
// 	const products = await getProductsList(12, 0);
// 	const numOfPages = Math.ceil(products.meta.total / 4);
// 	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
// 	return pages.map((page) => ({ params: { pageNumber: page.toString() } }));
// }

export default async function ProductsPagePagination({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { orderBy: ProductSortBy; order: SortDirection };
}) {
	const skip = parseInt(params.pageNumber) === 1 ? 0 : parseInt(params.pageNumber) * 4 - 4;
	const products = await getProductsList(4, skip, searchParams.orderBy, searchParams.order);

	const numberOfPages = Math.ceil(products.meta.total / 4);

	return (
		<>
			<Sorting pageNumber={params.pageNumber} />
			<ProductList products={products.data} />
			<Pagination numberOfPages={numberOfPages} href="products" />
		</>
	);
}
