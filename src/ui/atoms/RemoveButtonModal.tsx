"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { removeItem } from "@/app/cart/actions";

export const RemoveButtonModal = ({
	cartId,
	productId,
	cartLength,
}: {
	cartId: string;
	productId: string;
	cartLength: number;
}) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			className="font-medium text-indigo-600 hover:text-indigo-500"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItem(cartId, productId);
					cartLength > 1 ? router.refresh() : router.back();
				});
			}}
		>
			Remove
		</button>
	);
};
