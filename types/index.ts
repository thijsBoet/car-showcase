import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	btnType?: 'button' | 'submit';
	isDisabled?: boolean;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}
