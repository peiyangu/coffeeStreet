import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	basePath: "/coffeeStreet",
	assetPrefix: "/coffeeStreet",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
