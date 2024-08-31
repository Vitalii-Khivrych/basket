import { FC } from 'react';

import { OrderCounterProps } from './OrderCounter.Props';

export const OrderCounter: FC<OrderCounterProps> = ({ orderNumber }) => {
	return (
		<span className="absolute left-[-2px] top-[-6px] flex h-[24px] w-[26px] animate-pulse items-center justify-center rounded-md border-2 border-black bg-accent text-[14px] font-semibold text-black group-hover:animate-none">
			{orderNumber}
		</span>
	);
};
