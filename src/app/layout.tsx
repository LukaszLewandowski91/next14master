import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Nav } from "@/ui/organisms/NavBar";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Clothes",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="pl">
				<body className={inter.className}>
					<Nav />
					<section className="max-x-md mx-auto p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
						{children}
					</section>
					<footer>
						<p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Clothes</p>
					</footer>
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
