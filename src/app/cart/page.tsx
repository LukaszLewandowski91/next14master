import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

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
								<td className="text-center">{item.quantity}</td>
								<td>{formatMoney(item.product.price / 100)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
