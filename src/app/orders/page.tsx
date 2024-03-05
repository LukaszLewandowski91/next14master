import { auth } from "@clerk/nextjs";
export default async function OrderPage() {
	return (
		<div>
			<pre> {JSON.stringify(auth(), null, 2)}</pre>
		</div>
	);
}
