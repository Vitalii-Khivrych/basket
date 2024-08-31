import { SingleMenuLItemProps } from '../MenuItem/MenuItem.props';

export interface BasketDishesItemProps {
	dish: SingleMenuLItemProps;
	remove: () => void;
}
