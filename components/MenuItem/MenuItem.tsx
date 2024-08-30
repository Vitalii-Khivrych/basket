import { FC } from 'react';
import Image from 'next/image';

import Basket from '@/public/images/menu/menu-basket.svg';

import { SingleMenuLItemProps } from './MenuItem.props';

type MenuItemProps = {
	item: SingleMenuLItemProps;
	click: () => void;
};

export const MenuItem: FC<MenuItemProps> = ({ item, click }) => {
	const { title, description, weight, weight_Unit, price, price_unit, img } = item;

	return (
		<li className="flex flex-col p-2">
			<div className="mb-4 h-auto w-full">
				<Image
					className="h-full w-full object-contain"
					src={img}
					alt={title}
					width={200}
					height={200}
					priority
				/>
			</div>
			<div className="flex h-full flex-col text-[13px] font-medium">
				<h2 className="mb-3 text-xl">{title}</h2>
				<p className="mb-[6px] w-fit rounded-[3px] bg-[#575a61] px-[5px] py-[2px]">
					<span className="text-primary">{`${weight} ${weight_Unit}`}</span>
				</p>
				<p className="mb-3 opacity-80">{description}</p>
				<div className="mt-auto flex">
					<span className="mr-9 text-[23px] font-extrabold">{`${price} ${price_unit}`}</span>
					<button
						className="flex h-[42px] w-[42px] items-center justify-center border border-accent bg-accent text-black duration-300 hover:bg-[transparent] hover:text-accent"
						onClick={click}
						type="button"
					>
						<Basket className="h-[25px] w-[26px]" />
					</button>
				</div>
			</div>
		</li>
	);
};
