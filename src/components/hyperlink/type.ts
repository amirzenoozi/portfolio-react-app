import { IconType } from '@icon-park/react/es/all';
import React from 'react';

export interface HyperlinkProps {
	text?: string;
	variant?: 'primary-dark' | 'primary-light' | 'secondary' | 'ghost-dark' | 'ghost-light' | 'linear-light';
	icon?: boolean;
	iconName?: IconType;
	iconPosition?: 'left' | 'right';
	type?: 'button' | 'submit' | 'reset';
	size?: number;
	to?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	children?: React.ReactNode;
	props?: any;
}
