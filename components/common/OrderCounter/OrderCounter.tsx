import { FC } from 'react';

import { OrderCounterProps } from './OrderCounter.Props';

export const OrderCounter: FC<OrderCounterProps> = ({ orderNumber }) => {
	return (
		<div className="absolute left-[-2px] top-[-3px] flex h-[20px] w-[26px] animate-pulse items-center justify-center rounded-md border-2 border-black bg-accent text-sm font-semibold text-black group-hover:animate-none">
			{orderNumber}
		</div>
	);
};
