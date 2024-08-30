'use client';

import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

export default function BasketPage({ params }: { params: { checkoutId: string } }) {
	const dishFromOrder = useAppSelector((state: RootState) => state.order);

	console.log('dishFromOrder', dishFromOrder);

	return <div>My Post: {params.checkoutId}</div>;
}
