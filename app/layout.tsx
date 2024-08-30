import type { Metadata } from 'next';
import { Tillana } from 'next/font/google';

import { Header } from '@/components';
import StoreProvider from './StoreProvider';

import './globals.css';

const tillana = Tillana({
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Simple basket',
	description: 'This is simple basket for pet project',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<html lang="en">
				<body className={tillana.className}>
					<Header />
					<main>{children}</main>
					<footer>This will be some footer</footer>
				</body>
			</html>
		</StoreProvider>
	);
}
