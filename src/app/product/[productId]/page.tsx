import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartAddProductDocument, CartCreateDocument, CartGetByIdDocument } from "@/gql/graphql";

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

	async function addToCartAction(_formData: FormData) {
		"use server";
		const cart = await getOrCreateCart();

		await addProductToCart(cart.id, params.productId);
	}

	return (
		<>
			<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{product.images[0] && <ProductImage src={product.images[0]?.url} alt={product.name} />}
				<div>
					<ProductDescription product={product} />
					<form action={addToCartAction}>
						<input type="hidden" name="productId" value={product.id} />
						<button
							type="submit"
							className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Add to cart
						</button>
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
		</>
	);
}

async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { cart: cart } = await executeGraphQL(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart) {
			return cart;
		}
	}

	const { cartFindOrCreate: newCart } = await executeGraphQL(CartCreateDocument, {});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
}
async function addProductToCart(cartId: string, productId: string) {
	await executeGraphQL(CartAddProductDocument, { cartId, productId });
}
