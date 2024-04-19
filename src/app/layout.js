import './globals.css';

export const metadata = {
	title: 'Dosi per pizza in casa | Pizza Maker',
	description: 'Le dosi per fare la pizza in casa in un forno casalingo',
};

export default function RootLayout({ children }) {
	return (
		<html lang="it">
			<link rel="icon" href="/icon.svg" sizes="any" />
			<body>{children}</body>
		</html>
	);
}
