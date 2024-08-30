import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HeaderBasket } from '../HeaderBasket/HeaderBasket';

import MainLogo from '@/public/images/logo.svg';

export const Header = () => {
	return (
		<header className="pt-6">
			<div className="container flex items-center justify-between">
				<Link
					href="/"
					className="flex h-[58px] w-[80px] animate-bounce items-center justify-center"
				>
					<MainLogo className="h-full w-full text-accent" alt="site logo" />
				</Link>
				<p>Simple header</p>
				<HeaderBasket />
			</div>
		</header>
	);
};
