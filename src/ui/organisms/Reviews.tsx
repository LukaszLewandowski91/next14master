import { Star } from "lucide-react";
import { getReviewsByProductId } from "@/api/products";

export const Reviews = async ({ productId }: { productId: string }) => {
	const reviews = await getReviewsByProductId(productId);
	if (!reviews) return null;

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
								<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
								<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
								<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
								<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
								<Star className="h-5 w-5 shrink-0 fill-gray-300 text-gray-300 text-opacity-100" />
							</div>
						</div>
						<p className="ml-2 text-sm leading-5 text-gray-900 text-opacity-100">
							Based on 1624 reviews
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
												style={{ width: "calc(62.7463%)" }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									63%
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
												style={{ width: "calc(9.97537%)" }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									10%
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
												style={{ width: "calc(5.97291%)" }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									6%
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
												style={{ width: "calc(12.2537%)" }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									12%
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
												style={{ width: "calc(9.05172%)" }}
											></div>
										</div>
									</div>
								</dt>
								<dd className="ml-3 w-10 text-right text-sm tabular-nums leading-5 text-gray-900 text-opacity-100">
									9%
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
							<div className="pb-12 pt-12">
								<div className="flex items-center">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400">
										ŁL
									</div>
									<div className="ml-4">
										<h4 className="text-sm font-bold text-gray-900 text-opacity-100">
											Łukasz Lewandowski
										</h4>
										<div className="mt-1 flex items-center">
											<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
											<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
											<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
											<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
											<Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400 text-opacity-100" />
										</div>
									</div>
								</div>

								<div className="mt-4 text-base  text-gray-600 text-opacity-100">
									<h3 className="text-lg font-bold">This is the best white t-shirt out there</h3>
									<p className="italic">
										This is the bag of my dreams. I took it on my last vacation and was able to fit
										an absurd amount of snacks for the many long and hungry flights.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
