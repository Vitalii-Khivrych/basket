'use client';

import { menu } from '@/data/menu';
import { SingleMenuLItemProps } from '../MenuItem/MenuItem.props';
import { RootState } from '@/store/store';
import { dishAdded } from '@/store/order/order.slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { MenuList } from '@/components';

export const HomePage = () => {
	const count = useAppSelector((state: RootState) => state.order);
	const dispatch = useAppDispatch();

	const handleClickAddToBasket = (dish: SingleMenuLItemProps) => {
		console.log(count);
		dispatch(dishAdded(dish));
	};

	return (
		<section className="py-5">
			<div className="container">
				<MenuList list={menu} click={handleClickAddToBasket} />
			</div>
		</section>
	);
};
