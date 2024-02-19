"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

`text-blue-400 hover:text-blue-600`;

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact,
}: {
	href: Route;
	children: ReactNode;
	className: string;
	activeClassName: string;
	exact: boolean;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(isActive || exact ? activeClassName : className)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
