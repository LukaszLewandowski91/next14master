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
}: {
	href: Route;
	children: ReactNode;
	className: string;
	activeClassName: string;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={clsx(isActive ? activeClassName : className)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
