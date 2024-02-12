"use client";
import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button
				className="rounded-lg bg-gray-200 px-4 py-2"
				onClick={() => setCounter((counter) => counter - 1)}
			>
				-
			</button>
			<input className="border border-slate-200 text-center" readOnly value={counter} />
			<button
				className="rounded-lg bg-gray-200 px-4 py-2"
				onClick={() => setCounter((counter) => counter + 1)}
			>
				+
			</button>
		</div>
	);
};
