import { Star } from "lucide-react";
import clsx from "clsx";
import { getReviewsByProductId } from "@/api/products";

export const Reviews = async ({ productId }: { productId: string }) => {
	const productReviews = await getReviewsByProductId(productId);
	if (!productReviews) return null;

	const rating = Math.round(productReviews.rating as number);

	const activeClassName = "h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100 ";
	const className = "h-5 w-5 shrink-0 fill-gray-300 text-gray-300 text-opacity-100";

	const fiveStars =
		(productReviews.reviews.filter((review) => review.rating === 5).length /
			productReviews.reviews.length) *
		100;
	const fourStars =
		(productReviews.reviews.filter((review) => review.rating === 4).length /
			productReviews.reviews.length) *
		100;
	const threeStars =
		(productReviews.reviews.filter((review) => review.rating === 3).length /
			productReviews.reviews.length) *
		100;
	const twoStars =
		(productReviews.reviews.filter((review) => review.rating === 2).length /
			productReviews.reviews.length) *
		100;
	const oneStar =
		(productReviews.reviews.filter((review) => review.rating === 1).length /
			productReviews.reviews.length) *
		100;

	const handleAuthor = (author: string) => {
		const authorInitials = author.split(" ").map((name) => name.charAt(0));
		return authorInitials.join("");
	};

	return (
		<div className="bg-white bg-opacity-100">
			<div className="mr-auto max-w-2xl p-16 sm:ml-auto sm:pb-24 sm:pl-6 sm:pr-6 sm:pt-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:pb-32 lg:pl-8 lg:pr-8 lg:pt-32">
				<div className="lg:col-span-4">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900 text-opacity-100">
						Customer Reviews
					</h2>
					<div className="mt-3 flex items-center">
						<div>
							<div className="flex items-center">
								<Star className={clsx(rating >= 1 ? activeClassName : className)} />
								<Star className={clsx(rating >= 2 ? activeClassName : className)} />
								<Star className={clsx(rating >= 3 ? activeClassName : className)} />
								<Star className={clsx(rating >= 4 ? activeClassName : className)} />
								<Star className={clsx(rating >= 5 ? activeClassName : className)} />
							</div>
						</div>
						<p className="ml-2 text-sm leading-5 text-gray-900 text-opacity-100">
							Based on {productReviews.reviews.length} reviews
						</p>
					</div>
					<div className="mt-6">
						<dl className="m-0">
							<div className="flex items-center text-sm leading-5">
								<dt className="flex flex-1 items-center">
									<p className="w-3 font-medium text-gray-900 text-opacity-100">5</p>
									<div aria-hidden="true" className="ml-1 flex flex-1 items-center">
										<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
										<div className="relative ml-3 flex-1">
											<div className="h-3 rounded-full border border-gray-200 border-opacity-100 bg-gray-100 bg-opacity-100"></div>
											<div
												className="absolute bottom-0 top-0 rounded-full border border-yellow-400 border-opacity-100 bg-yellow-400 bg-opacity-100"
												style={{ width: `calc(${fiveStars}%)` }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									{Math.round(fiveStars)}%
								</dd>
							</div>

							<div className="flex items-center text-sm leading-5">
								<dt className="flex flex-1 items-center">
									<p className="w-3 font-medium text-gray-900 text-opacity-100">4</p>
									<div aria-hidden="true" className="ml-1 flex flex-1 items-center">
										<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
										<div className="relative ml-3 flex-1">
											<div className="h-3 rounded-full border border-gray-200 border-opacity-100 bg-gray-100 bg-opacity-100"></div>
											<div
												className="absolute bottom-0 top-0 rounded-full border border-yellow-400 border-opacity-100 bg-yellow-400 bg-opacity-100"
												style={{ width: `calc(${fourStars}%)` }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									{Math.round(fourStars)}%
								</dd>
							</div>
							<div className="flex items-center text-sm leading-5">
								<dt className="flex flex-1 items-center">
									<p className="w-3 font-medium text-gray-900 text-opacity-100">3</p>
									<div aria-hidden="true" className="ml-1 flex flex-1 items-center">
										<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
										<div className="relative ml-3 flex-1">
											<div className="h-3 rounded-full border border-gray-200 border-opacity-100 bg-gray-100 bg-opacity-100"></div>
											<div
												className="absolute bottom-0 top-0 rounded-full border border-yellow-400 border-opacity-100 bg-yellow-400 bg-opacity-100"
												style={{ width: `calc(${threeStars}%)` }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									{Math.round(threeStars)}%
								</dd>
							</div>
							<div className="flex items-center text-sm leading-5">
								<dt className="flex flex-1 items-center">
									<p className="w-3 font-medium text-gray-900 text-opacity-100">2</p>
									<div aria-hidden="true" className="ml-1 flex flex-1 items-center">
										<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
										<div className="relative ml-3 flex-1">
											<div className="h-3 rounded-full border border-gray-200 border-opacity-100 bg-gray-100 bg-opacity-100"></div>
											<div
												className="absolute bottom-0 top-0 rounded-full border border-yellow-400 border-opacity-100 bg-yellow-400 bg-opacity-100"
												style={{ width: `calc(${twoStars}%)` }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									{Math.round(twoStars)}%
								</dd>
							</div>
							<div className="flex items-center text-sm leading-5">
								<dt className="flex flex-1 items-center">
									<p className="w-3 font-medium text-gray-900 text-opacity-100">1</p>
									<div aria-hidden="true" className="ml-1 flex flex-1 items-center">
										<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
										<div className="relative ml-3 flex-1">
											<div className="h-3 rounded-full border border-gray-200 border-opacity-100 bg-gray-100 bg-opacity-100"></div>
											<div
												className="absolute bottom-0 top-0 rounded-full border border-yellow-400 border-opacity-100 bg-yellow-400 bg-opacity-100"
												style={{ width: `calc(${oneStar}%)` }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									{Math.round(oneStar)}%
								</dd>
							</div>
						</dl>
					</div>
					<div className="mt-10">
						<h3 className="text-lg font-medium text-gray-900 text-opacity-100">
							Share your thoughts
						</h3>
						<p className="mt-1 text-sm text-gray-600 text-opacity-100">
							If you’ve used this product, share your thoughts with other customers
						</p>
					</div>
				</div>
				<div className="col-start-6 mt-0 lg:col-span-7">
					<div className="flow-root">
						<div className="-mb-12 -mt-12">
							{productReviews.reviews.map((review) => (
								<div key={review.id} className="pb-12 pt-12">
									<div className="flex items-center">
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400">
											{handleAuthor(review.author)}
										</div>
										<div className="ml-4">
											<h4 className="text-sm font-bold text-gray-900 text-opacity-100">
												{review.author}
											</h4>
											<div className="mt-1 flex items-center">
												<Star className={clsx(review.rating >= 1 ? activeClassName : className)} />
												<Star className={clsx(review.rating >= 2 ? activeClassName : className)} />
												<Star className={clsx(review.rating >= 3 ? activeClassName : className)} />
												<Star className={clsx(review.rating >= 4 ? activeClassName : className)} />
												<Star className={clsx(review.rating >= 5 ? activeClassName : className)} />
											</div>
										</div>
									</div>

									<div className="mt-4 text-base  text-gray-600 text-opacity-100">
										<h3 className="text-lg font-bold">{review.title}</h3>
										<p className="italic">{review.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
