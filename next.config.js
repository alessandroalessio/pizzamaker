/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
	reactStrictMode: true, // Enable React strict mode for improved error handling
	swcMinify: true, // Enable SWC minification for improved performance
	compiler: {
		removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log in production
	},
};

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: prod ? false : true,
	register: true, // Register the PWA service worker
	skipWaiting: false, // Skip waiting for service worker activation
});

// export default nextConfig;
module.exports = withPWA(nextConfig);
