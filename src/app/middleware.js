import { NextResponse } from 'next/server';

export function middleware(req) {
	const defaultLocale = 'it';
	const otherLocale = 'en';
	const acceptedLanguages = req.headers['accept-language'];

	if (!acceptedLanguages) {
		return NextResponse.rewrite(`/${defaultLocale}`);
	}

	const languages = acceptedLanguages
		.split(',')
		.map((lang) => lang.split(';')[0]);
	if (languages.includes(defaultLocale)) {
		return NextResponse.rewrite(`/${defaultLocale}`);
	} else {
		return NextResponse.rewrite(`/${otherLocale}`);
	}
}
