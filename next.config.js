/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: true,
			},
			// {
			// 	source: "/categories/hoodies",
			// 	destination: "/categories/hoodies/1",
			// 	permanent: false,
			// },
			// {
			// 	source: "/categories/accessories",
			// 	destination: "/categories/accessories/1",
			// 	permanent: false,
			// },
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
