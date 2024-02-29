"use client";

import { useRouter } from "next/navigation";

export function Overlay() {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity"
		/>
	);
}
