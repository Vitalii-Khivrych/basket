import { FC } from 'react';

import { BasketDishesItem } from '@/components';

import { BasketDishesListProps } from './BasketDishesList.props';

export const BasketDishesList: FC<BasketDishesListProps> = ({ dishes, styles, remove }) => {
	return (
		<ul className={`${styles}`}>
			{dishes.map((itm, ind) => (
				<BasketDishesItem key={`${itm.id}-${ind}`} dish={itm} remove={() => remove(itm)} />
			))}
		</ul>
	);
};
