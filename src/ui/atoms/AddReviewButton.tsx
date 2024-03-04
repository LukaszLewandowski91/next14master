"use client";

import { useFormStatus } from "react-dom";

export const AddReviewButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="mt-4 flex w-full justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
			data-testid="add-review-button"
		>
			Submit review
		</button>
	);
};
