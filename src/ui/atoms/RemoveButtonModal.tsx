"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { removeItem } from "@/app/cart/actions";

export const RemoveButtonModal = ({ cartId, productId }: { cartId: string; productId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			className="font-medium text-indigo-600 hover:text-indigo-500"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItem(cartId, productId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
