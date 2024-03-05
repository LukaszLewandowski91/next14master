import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({
	numberOfPages,
	href,
	searchParams,
}: {
	numberOfPages: number;
	href: string;
	searchParams: { orderBy: string; order: string };
}) => {
	const pages = new Array(numberOfPages).fill(0);
	const defaultClasses = "inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium";
	const activeClasses = defaultClasses + " border-blue-500 text-blue-600";

	return (
		<nav className="mt-auto flex items-center justify-center border-t border-slate-200 px-4">
			<ul aria-label="pagination" className="-mt-px flex">
				{pages.map((_, index) => {
					return (
						<li key={index}>
							{searchParams.orderBy !== undefined ? (
								<ActiveLink
									href={
										index === 0
											? `/${href}/1?orderBy=${searchParams.orderBy}&order=${searchParams.order}`
											: `/${href}/${index + 1}?orderBy=${searchParams.orderBy}&order=${searchParams.order}`
									}
									className={defaultClasses}
									activeClassName={activeClasses}
									exact={true}
								>
									{index + 1}
								</ActiveLink>
							) : (
								<ActiveLink
									href={index === 0 ? `/${href}/1` : `/${href}/${index + 1}`}
									className={defaultClasses}
									activeClassName={activeClasses}
									exact={true}
								>
									{index + 1}
								</ActiveLink>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
