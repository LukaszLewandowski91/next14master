"use client";
import { useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

export function ChangeQuantity({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(cartId, productId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
}
