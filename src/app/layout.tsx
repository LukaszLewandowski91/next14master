import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Clothes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav>
					<ul className=" mt-2 flex justify-center space-x-4">
						<li>
							<ActiveLink
								href="/"
								className="text-blue-400 hover:text-blue-600"
								activeClassName="text-blue-600 underline"
								exact={true}
							>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href="/products"
								className="text-blue-400 hover:text-blue-600"
								activeClassName="text-blue-600 underline"
								exact={false}
							>
								All
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="max-x-md mx-auto p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Clothes</p>
				</footer>
			</body>
		</html>
	);
}
