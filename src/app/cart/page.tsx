// import Link from "next/link";
import { getCartFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils";
import { ChangeQuantity } from "@/ui/atoms/ChangeQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { handlePaymentAction } from "@/app/cart/actions";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		return;
	}

	if (cart.items.length === 0) {
		return <div>Your cart is empty</div>;
	} else {
		return (
			<div className="mt-10">
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th className="px-4 text-center">Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{cart.items.map((item) => {
							if (!item.product) {
								return null;
							}
							return (
								<tr key={item.product.id}>
									<td>{item.product.name}</td>
									<td className="text-center">
										{
											<ChangeQuantity
												cartId={cart.id}
												productId={item.product.id}
												quantity={item.quantity}
											/>
										}
									</td>
									<td>{formatMoney(item.product.price / 100)}</td>
									<td>
										<RemoveButton cartId={cart.id} productId={item.product.id} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<form action={handlePaymentAction}>
					<button
						type="submit"
						className="mt-4 w-full max-w-xs rounded-md border bg-slate-950 py-2 text-white shadow-sm transition-colors hover:bg-slate-800 "
					>
						Pay
					</button>
				</form>
			</div>
		);
	}
}
