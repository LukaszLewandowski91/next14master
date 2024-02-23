import NextImage from "next/image";
import Link from "next/link";
import { getProductsByCategorySlug } from "@/api/products";
import { formatMoney } from "@/utils";
export const SuggestedProductsList = async ({ categorySlug }: { categorySlug: string }) => {
	const products = await getProductsByCategorySlug(categorySlug);

	if (!products) {
		return null;
	}
	return (
		<section
			aria-labelledby="related-heading"
			className="mt-16 sm:mt-24"
			data-testid="related-products"
		>
			<h2 id="related-heading" className="text-lg font-medium text-gray-900">
				Sugerowane produkty
			</h2>

			<ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products?.slice(0, 4).map((product) => (
					<li key={product.id} className="group relative">
						<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
							{product.images[0] && (
								<NextImage
									priority
									width={600}
									height={600}
									src={product.images[0].url}
									alt={product.name}
									className="h-full w-full object-contain object-center transition-all duration-300 group-hover:scale-105 group-hover:opacity-75 lg:h-full lg:w-full"
								/>
							)}
						</div>
						<div className="mt-4 flex justify-between">
							<div>
								<h3 className="text-sm text-gray-700">
									<Link href={`/product/${product.id}`}>
										<span aria-hidden="true" className="absolute inset-0" />
										{product.name}
									</Link>
								</h3>
								<p className="mt-1 text-sm text-gray-500">{product.categories[0]?.name}</p>
							</div>
							<p className="text-sm font-medium text-gray-900">
								{formatMoney(product.price / 100)}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
