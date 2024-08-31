import { FC } from 'react';
import Image from 'next/image';

import CrossRemove from '@/public/images/cross-delete.svg';

import { BasketDishesItemProps } from './BasketDishesItem.props';

export const BasketDishesItem: FC<BasketDishesItemProps> = ({ dish, remove }) => {
	const { title, weight, weight_Unit, price, price_unit, img } = dish;

	return (
		<li className="mb-5 flex items-center justify-between bg-[#000] last:mb-0">
			<div>
				<Image src={img} alt={`image ${title}`} width={180} height={180} priority />
			</div>
			<div className="flex w-full items-center justify-between p-5">
				<div className="w-full">
					<h2>{title}</h2>
					<p>{`${weight} ${weight_Unit}`}</p>
				</div>
				<div className="flex items-center justify-end">
					<p className="whitespace-nowrap">{`${price} ${price_unit}`}</p>
					<button
						type="button"
						onClick={remove}
						className="ml-5 flex h-[42px] w-[42px] items-center justify-center border border-error text-error duration-200 hover:border-hover hover:text-hover"
					>
						<CrossRemove className="h-5 w-5" />
					</button>
				</div>
			</div>
		</li>
	);
};
