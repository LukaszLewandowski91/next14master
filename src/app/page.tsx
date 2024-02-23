import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const products = await getProductsList(4, 0);

	return (
		<>
			<ProductList products={products.data.slice(0, 4)} />
		</>
	);
}
