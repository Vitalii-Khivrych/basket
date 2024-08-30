import { SingleMenuLItemProps } from '../MenuItem/MenuItem.props';

export interface MenuListProps {
	list: SingleMenuLItemProps[];
	click: (dish: SingleMenuLItemProps) => void;
}
