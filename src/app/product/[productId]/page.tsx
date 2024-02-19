import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
			images: [product.coverImage.src],
		},
	};
};

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({
		productId: product.id,
	}));
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<ProductImage {...product.coverImage} />
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
