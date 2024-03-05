import { Star } from "lucide-react";
import clsx from "clsx";
import { type ProductListItemFragment } from "@/gql/graphql";

import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};
export const ProductListItemDescription = ({
	product: { name, categories, price, rating },
}: ProductListItemDescriptionProps) => {
	const activeClassName = "h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100 ";
	const className = "h-5 w-5 shrink-0 fill-gray-300 text-gray-300 text-opacity-100";
	return (
		<>
			<div className="mt-2 flex justify-between">
				<div>
					<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
					{categories[0] && (
						<p className="text-sm text-gray-500">
							<span className="sr-only">Kategoria:</span> {categories[0].name}
						</p>
					)}
				</div>
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Cena:</span>{" "}
					<span data-testid="product-price">{formatMoney(price / 100)}</span>
				</p>
			</div>
			{rating && (
				<div className="mb-3 mt-1 flex items-center">
					<p data-testid="product-rating">{Math.round(rating as number).toFixed(0)}</p>
					<Star className={clsx(rating >= 1 ? activeClassName : className)} />
					<Star className={clsx(rating >= 2 ? activeClassName : className)} />
					<Star className={clsx(rating >= 3 ? activeClassName : className)} />
					<Star className={clsx(rating >= 4 ? activeClassName : className)} />
					<Star className={clsx(rating >= 5 ? activeClassName : className)} />
				</div>
			)}
		</>
	);
};
