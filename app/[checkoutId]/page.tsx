'use client';

import { BasketDishesItem, BasketDishesList, BasketTitle } from '@/components';
import { SingleMenuLItemProps } from '@/components/MenuItem/MenuItem.props';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { dishRemoved } from '@/store/order/order.slice';
import { RootState } from '@/store/store';

export default function BasketPage({ params }: { params: { checkoutId: string } }) {
	const dishesInOrder = useAppSelector((state: RootState) => state.order);
	const amountItemsInBasket = dishesInOrder.length;
	const isOrderExists = dishesInOrder.length > 0;

	const dispatch = useAppDispatch();

	const handleClickRemoveDish = (dish: SingleMenuLItemProps) => dispatch(dishRemoved(dish));

	return (
		<section className="py-4">
			<div className="container">
				<BasketTitle count={amountItemsInBasket} styles="mb-5" />
				{isOrderExists && (
					<BasketDishesList dishes={dishesInOrder} remove={handleClickRemoveDish} />
				)}
			</div>
		</section>
	);
}
