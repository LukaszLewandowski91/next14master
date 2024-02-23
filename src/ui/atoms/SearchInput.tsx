"use client";

import { useRouter } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 500);
	const router = useRouter();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		if (debouncedSearch.length > 1) {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, search]);

	return (
		<input
			type="search"
			placeholder="Search..."
			onChange={handleChange}
			className="hidden h-10 p-2 md:block"
		/>
	);
};
