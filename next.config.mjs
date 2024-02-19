/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh[1-6].googleusercontent.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
