"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		setTimeout(() => {
			router.push(`/search?query=${search}`);
		}, 500);
	}, [search]);

	return (
		<input
			type="search"
			placeholder="Search..."
			onChange={handleChange}
			className="hidden h-10 p-2 md:block"
		/>
	);
};
