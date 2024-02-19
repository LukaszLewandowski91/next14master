"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact,
}: {
	href: string;
	children: ReactNode;
	className: string;
	activeClassName: string;
	exact: boolean;
}) => {
	const pathname = usePathname();
	const matchedPath = href;

	const isActive =
		(matchedPath &&
			pathname &&
			(exact ? pathname === matchedPath : pathname.startsWith(matchedPath))) ||
		false;

	return (
		<Link
			href={href as Route}
			className={clsx(isActive ? activeClassName : className)}
			aria-current={isActive ? isActive : undefined}
		>
			{children}
		</Link>
	);
};
