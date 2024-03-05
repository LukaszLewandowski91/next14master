"use client";
// import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Sorting = ({ pageNumber }: { pageNumber: string }) => {
	const [isClicked, setIsClicked] = useState(false);
	const [sorting, setSorting] = useState("");
	const [order, setOrder] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (sorting !== "") {
			router.push(`/products/${pageNumber}?orderBy=${sorting}&order=${order}`);
		}
	}, [sorting, order]);

	return (
		<>
			<div className="mb-4 flex items-center">
				<div className="relative inline-block text-left">
					<div>
						<button
							type="button"
							className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
							id="menu-button"
							aria-expanded="false"
							aria-haspopup="true"
							onClick={() => setIsClicked(!isClicked)}
						>
							Sort
							<svg
								className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<div
						className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl  ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabIndex={-1}
					>
						{/* <div className={clsx("py-1", isClicked ? "" : "hidden")} role="none"> */}
						<div className="py-1" role="none">
							<button
								className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
								role="menuitem"
								tabIndex={-1}
								id="menu-item-3"
								data-testid="sort-by-price"
								onClick={() => (setSorting("PRICE"), setOrder("ASC"), setIsClicked(!isClicked))}
							>
								Price: Low to High
							</button>
							<button
								className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
								role="menuitem"
								tabIndex={-1}
								id="menu-item-4"
								data-testid="sort-by-price"
								onClick={() => (setSorting("PRICE"), setOrder("DESC"), setIsClicked(!isClicked))}
							>
								Price: High to Low
							</button>
							<button
								className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
								role="menuitem"
								tabIndex={-1}
								id="menu-item-0"
								onClick={() => (setSorting("DEFAULT"), setOrder("ASC"), setIsClicked(!isClicked))}
							>
								Most Popular
							</button>
							<button
								className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
								role="menuitem"
								tabIndex={-1}
								id="menu-item-1"
								data-testid="sort-by-rating"
								onClick={() => (setSorting("RATING"), setOrder("DESC"), setIsClicked(!isClicked))}
							>
								Best Rating
							</button>
							<button
								className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
								role="menuitem"
								tabIndex={-1}
								id="menu-item-2"
								data-testid="sort-by-rating"
								onClick={() => (setSorting("RATING"), setOrder("ASC"), setIsClicked(!isClicked))}
							>
								Worst Rating
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
