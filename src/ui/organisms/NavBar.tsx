import { ShoppingCart } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { SearchInput } from "@/ui/atoms/SearchInput";
import { getCartFromCookies } from "@/api/cart";

const NavLinks = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All", exact: false },
	{ href: "/categories/t-shirts", label: "T-shirts", exact: false },
	{ href: "/categories/hoodies", label: "Hoodies", exact: false },
	{ href: "/categories/accessories", label: "Accessories", exact: false },
];

export const Nav = async () => {
	const defaultClasses =
		"flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-slate-500";
	const activeClasses = defaultClasses + " border-blue-500";
	const classNames =
		defaultClasses + " border-transparent hover:border-gray-300 hover:text-slate-700";

	const cart = await getCartFromCookies();

	const quantity = cart?.items.length || 0;

	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
				<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
					<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
						<div className="hidden flex-shrink-0 items-center lg:flex"></div>

						<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
							{NavLinks.map((link) => (
								<li key={link.href} className="first:pl-4 last:pr-4 lg:px-0">
									<ActiveLink
										href={link.href}
										className={classNames}
										activeClassName={activeClasses}
										exact={link.exact}
									>
										{link.label}
									</ActiveLink>
								</li>
							))}
						</ul>
					</nav>
					<SearchInput />
					<div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">
						<div className="ml-auto h-full lg:ml-4">
							<ActiveLink
								href="/cart"
								className={classNames}
								activeClassName={activeClasses}
								exact={false}
							>
								<ShoppingCart className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
								<div className="w-4">
									<span className="ml-2 text-sm font-medium">{quantity}</span>
									<span className="sr-only">items in cart, view bag</span>
								</div>
							</ActiveLink>
						</div>
					</div>
					<div>
						<SignedIn>
							{/* <UserButton userProfileMode="navigation" appearance={clerkAppearance} /> */}
							<UserButton userProfileMode="navigation" afterSignOutUrl="/" />
						</SignedIn>
						<SignedOut>
							<SignInButton />
						</SignedOut>
					</div>
				</div>
			</div>
		</header>
	);
};
