import { IconType } from '@icon-park/react/es/all';

export interface BtnProps {
	text?: string;
	variant?: 'primary-dark' | 'primary-light' | 'secondary' | 'ghost-dark' | 'ghost-light' | 'linear-light';
	icon?: boolean;
	iconName?: IconType;
	iconPosition?: 'left' | 'right';
	type?: 'button' | 'submit' | 'reset';
	size?: number;
	to?: string;
	disable?: boolean;
}
