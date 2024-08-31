import { FC } from 'react';
import { BasketTitleProps } from './BasketTitle.props';

export const BasketTitle: FC<BasketTitleProps> = ({ count = 0, styles = '' }) => {
	const isEmptyBasket = count < 1;

	return (
		<h1 className={`${styles} relative inline-block text-[40px] font-medium`}>
			Basket
			{isEmptyBasket ? (
				''
			) : (
				<span className="basket-title absolute text-[26px] font-semibold text-accent">{count}</span>
			)}
		</h1>
	);
};
