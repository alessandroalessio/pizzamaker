import './globals.css';
import { Poppins } from 'next/font/google';

const globalFonts = Poppins({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
});

export const metadata = {
	title: 'Dosi per pizza in casa | Pizza Maker',
	description: 'Le dosi per fare la pizza in casa in un forno casalingo',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['pizzamaker'],
	authors: [
		{ name: 'Alessandro Alessio' },
		{
			name: 'Alessandro Alessio',
			url: 'https://www.alessandroalessio.dev',
		},
	],
	icons: [
		{ rel: 'apple-touch-icon', url: '/logo.svg' },
		{ rel: 'icon', url: '/logo.svg' },
	],
};

export const viewport = {
	themeColor: '#8AFFBD',
	viewport:
		'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
};

export default function RootLayout({ children }) {
	return (
		<html lang="it">
			<link rel="icon" href="/icon.svg" sizes="any" />
			<body className={globalFonts.className}>{children}</body>
		</html>
	);
}
