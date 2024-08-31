import { SingleMenuLItemProps } from '../MenuItem/MenuItem.props';

export interface BasketDishesListProps {
	dishes: SingleMenuLItemProps[];
	styles?: string;
	remove: (dish: SingleMenuLItemProps) => void;
}
