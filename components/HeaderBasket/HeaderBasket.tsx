'use client';

import Link from 'next/link';

import { RootState } from '@/store/store';

import { useAppSelector } from '@/store/hooks';

import { OrderCounter } from '../common';
import Basket from '@/public/images/menu/menu-basket.svg';
import { generateRandomNumber } from '@/utils/generateRandomNumber';

export const HeaderBasket = () => {
	const orderList = useAppSelector((state: RootState) => state.order);
	const getOrderNumber = generateRandomNumber(orderList.length);

	const isNoOrder = orderList.length !== 0;

	return (
		<Link
			href={`/${getOrderNumber}`}
			className="group relative flex h-[50px] w-[50px] items-center justify-center text-white duration-300 hover:scale-[1.05] hover:bg-[transparent] hover:text-accent"
		>
			<Basket className="h-[36px] w-[36px]" />
			{isNoOrder && <OrderCounter orderNumber={orderList.length} />}
		</Link>
	);
};
