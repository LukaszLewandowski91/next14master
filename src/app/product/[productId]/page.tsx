import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { revalidateTag } from "next/cache";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { getOrCreateCart, addProductToCart } from "@/api/cart";
import { Reviews } from "@/ui/organisms/Reviews";

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

	async function addToCartAction() {
		"use server";
		const cart = await getOrCreateCart();

		await addProductToCart(cart.id, params.productId);
		revalidateTag("cart");
	}

	return (
		<>
			<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{product.images[0] && <ProductImage src={product.images[0]?.url} alt={product.name} />}
				<div>
					<ProductDescription product={product} />
					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</article>
			<aside className="space-y-4">
				<Suspense fallback={"Ładowanie..."}>
					{product.categories[0] && (
						<SuggestedProductsList categorySlug={product.categories[0]?.slug} />
					)}
				</Suspense>
			</aside>
			<aside className="space-y-4">
				<Reviews productId={params.productId} />
			</aside>
		</>
	);
}
