export default function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	return (
		<div>
			<h1>Search Results for : {searchParams.query}</h1>
		</div>
	);
}
