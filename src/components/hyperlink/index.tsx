import React from 'react';
import Icon, {IconType} from '@icon-park/react/es/all';
import './style.scss';

interface HyperlinkProps {
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

const Hyperlink: React.FC<HyperlinkProps> = ({
	text = '',
	variant = 'primary',
	icon = false,
	iconName = '',
	iconPosition = 'left',
	type = 'button',
	size = 24,
	to = '',
	target = '_blank',
	children,
	...props
}) => {
	return (
		<a
			className={BtnClassGenerator(variant, icon, iconName, iconPosition)}
			type={type}
			href={to}
			target={target}
			{...props}
		>
			{children}
		</a>
	);
}

const BtnClassGenerator = (variant: string, icon: boolean, iconName: string, iconPosition: string) => {
	let classes = [
		'hyperlink',
		`hyperlink--${variant}`,
		iconPosition === 'left' && 'hyperlink--prepend',
		iconPosition === 'right' && 'hyperlink--append',
		icon && 'hyperlink--icon',
	];
	return classes.join(' ');
}

export default Hyperlink;
