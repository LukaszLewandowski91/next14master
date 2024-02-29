"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
	const router = useRouter();
	return (
		<button
			type="button"
			onClick={() => router.back()}
			className="font-medium text-indigo-600 hover:text-indigo-500"
		>
			Continue Shopping
			<span aria-hidden="true"> &rarr;</span>
		</button>
	);
}
