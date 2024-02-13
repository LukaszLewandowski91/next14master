import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
			<Suspense fallback="Ładowanie...">
				<h2>Related products</h2>
				<SuggestedProductsList />
			</Suspense>
		</>
	);
}
