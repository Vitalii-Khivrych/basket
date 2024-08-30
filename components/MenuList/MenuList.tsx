import { FC } from 'react';

import { MenuListProps } from './MenuList.props';

import { MenuItem } from '@/components';

export const MenuList: FC<MenuListProps> = ({ list, click }) => {
	return (
		<ul className="grid grid-cols-3 gap-3">
			{list.map((item, ind) => (
				<MenuItem key={ind} item={item} click={() => click(item)} />
			))}
		</ul>
	);
};
