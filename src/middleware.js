import { NextResponse } from 'next/server';

export function middleware(req) {
	const defaultLocale = 'it';
	const otherLocale = 'en';
	const acceptedLanguages = req.headers['accept-language'];

	let basicUrl = req.nextUrl.clone();

	// if (!acceptedLanguages) {
	// 	basicUrl.pathname = '/';
	// 	return NextResponse.redirect(basicUrl);
	// }

	// const languages = acceptedLanguages
	// 	.split(',')
	// 	.map((lang) => lang.split(';')[0]);
	// if (languages.includes(defaultLocale)) {
	// 	return NextResponse.rewrite(`/${defaultLocale}`);
	// } else {
	// 	return NextResponse.rewrite(`/${otherLocale}`);
	// }
}
