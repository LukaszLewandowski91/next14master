import NextImage from "next/image";
import { Overlay } from "@/ui/atoms/Overlay";
import { getCartFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils";
import { getProductById } from "@/api/products";
import { RemoveButtonModal } from "@/ui/atoms/RemoveButtonModal";
import { BackButton } from "@/ui/atoms/BackButton";
export default async function ModalCart() {
	const cart = await getCartFromCookies();

	if (!cart) {
		return null;
	}

	const getImage = async (productId: string) => {
		const product = await getProductById(productId);

		if (!product) {
			return null;
		}
		return (
			<NextImage
				src={product.images[0]?.url as string}
				alt={product.name}
				width={94}
				height={94}
				className="h-full w-full object-cover object-center"
			/>
		);
	};

	const subtotal = () => {
		let total = 0;
		cart.items.map((item) => {
			total += item.product.price * item.quantity;
		});
		return total;
	};

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white ">
				<div className="flex items-start justify-between p-2">
					<h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
						Shopping cart
					</h2>
					<div className="ml-3 flex h-7 items-center ">
						<button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Close panel</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
				<div className="mt-8 p-2">
					<div className="flow-root">
						<ul role="list" className="-my-6 divide-y divide-gray-200">
							{cart.items.length > 0 &&
								cart?.items.map((item) => (
									<li key={item.product.id} className="flex py-6">
										<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											{getImage(item.product.id)}
										</div>

										<div className="ml-4 flex flex-1 flex-col">
											<div>
												<div className="flex justify-between text-base font-medium text-gray-900">
													<h3>{item.product.name}</h3>
													<p className="ml-4">{formatMoney(item.product.price / 100)}</p>
												</div>
											</div>
											<div className="flex flex-1 items-end justify-between text-sm">
												<p className="text-gray-500">Qty {item.quantity}</p>

												<div className="flex">
													<RemoveButtonModal cartId={cart.id} productId={item.product.id} />
												</div>
											</div>
										</div>
									</li>
								))}
						</ul>
						<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
							<div className="flex justify-between text-base font-medium text-gray-900">
								<p>Subtotal</p>
								<p>{formatMoney(subtotal() / 100)}</p>
							</div>
							<div className="mt-6">
								<a
									className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
									href="/cart"
								>
									Checkout
								</a>
							</div>
							<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
								<p>
									<BackButton />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
