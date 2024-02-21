import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	if (!product) {
		throw notFound();
	}
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
			images: product.images[0]?.url,
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}
	return (
		<>
			<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{product.images[0] && <ProductImage src={product.images[0]?.url} alt={product.name} />}
				<ProductDescription product={product} />
				<aside className="space-y-4">
					<Suspense fallback={"Ładowanie..."}>
						<h2>Sugerowane produkty</h2>
						<SuggestedProductsList />
					</Suspense>
				</aside>
			</article>
		</>
	);
}
