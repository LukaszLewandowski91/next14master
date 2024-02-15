export async function generateStaticParams({ params }: { params: { category: string } }) {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else if (params.category === "boots") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
	}
}
export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<div>
			<h1>CategoryProductPage</h1>
			<p>category: {params.category}</p>
			<p>pageNumber: {params.pageNumber}</p>
		</div>
	);
}
