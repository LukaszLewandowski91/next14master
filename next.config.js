/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	redirects: async () => {
		return [
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: true,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
