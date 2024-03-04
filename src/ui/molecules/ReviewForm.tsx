export const ReviewForm = () => {
	return (
		<>
			<label id="author" className="mt-1 block text-sm font-medium leading-6 text-gray-700">
				Author
			</label>
			<input
				type="text"
				name="author"
				id="author"
				required
				className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
				placeholder="Author"
			/>
			<label id="email" className="mt-1 block text-sm font-medium leading-6 text-gray-700">
				Email
			</label>
			<input
				type="email"
				name="email"
				id="email"
				required
				className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
				placeholder="Email"
			/>
			<label id="title" className="mt-1 block text-sm font-medium leading-6 text-gray-700">
				Title
			</label>
			<input
				type="title"
				name="title"
				id="title"
				required
				className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
				placeholder="Title"
			/>
			<label id="description" className="mt-1 block text-sm font-medium leading-6 text-gray-700">
				Description
			</label>
			<textarea
				className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
				placeholder="Description"
				required
				name="description"
			></textarea>
			<fieldset className="mt-1">
				<label id="rating" className="mt-1 block text-sm font-medium leading-6 text-gray-700">
					Rating
				</label>
				<div className="sm:flex sm:items-center">
					<div className="flex items-center">
						<label htmlFor="rating-1" className="ml-3 mr-3 block text-sm font-medium text-gray-700">
							1
						</label>
						<input
							id="rating-1"
							name="rating"
							type="radio"
							required
							value={1}
							className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
						/>
					</div>
					<div className="flex items-center">
						<label
							htmlFor="rating-2"
							className="ml-3 mr-3  block text-sm font-medium text-gray-700"
						>
							2
						</label>
						<input
							id="rating-2"
							name="rating"
							type="radio"
							required
							value={2}
							className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
						/>
					</div>
					<div className="flex items-center">
						<label htmlFor="rating-3" className="ml-3 mr-3 block text-sm font-medium text-gray-700">
							3
						</label>
						<input
							id="rating-3"
							name="rating"
							type="radio"
							required
							value={3}
							className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
						/>
					</div>
					<div className="flex items-center">
						<label htmlFor="rating-4" className="ml-3 mr-3 block text-sm font-medium text-gray-700">
							4
						</label>
						<input
							id="rating-4"
							name="rating"
							type="radio"
							required
							value={4}
							className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
						/>
					</div>
					<div className="flex items-center">
						<label htmlFor="rating-5" className="ml-3 mr-3 block text-sm font-medium text-gray-700">
							5
						</label>
						<input
							id="rating-5"
							name="rating"
							type="radio"
							required
							value={5}
							className="h-4 w-4 border-gray-300 text-yellow-600 focus:ring-yellow-500"
						/>
					</div>
				</div>
			</fieldset>
		</>
	);
};
