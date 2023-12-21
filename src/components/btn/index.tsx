import React from 'react';
import Icon, {IconType} from '@icon-park/react/es/all';
import './style.scss';

interface FlexRowProps {
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

const Btn: React.FC<FlexRowProps> = ({
	text = '',
	variant = 'primary',
	icon = false,
	iconName = '',
	iconPosition = 'left',
	type = 'button',
	size = 24,
	disable = false,
	to = '',
	...props
}) => {
	return (
		<button
			className={BtnClassGenerator(variant, icon, iconName, iconPosition, disable)}
			type={type}
			disabled={disable}
			{...props}
		>
			{!icon && iconName && iconPosition === 'left' && <Icon type={iconName} theme="filled" size={size} />}
			{icon && iconName && <Icon type={iconName} theme="filled" size={size} />}
			{!icon && iconName && text}
			{!icon && iconName && iconPosition === 'right' && <Icon type={iconName} theme="filled" size={size} />}
		</button>
	);
}

const BtnClassGenerator = (variant: string, icon: boolean, iconName: string, iconPosition: string, disable: boolean) => {
	let classes = [
		'btn',
		`btn--${variant}`,
		iconPosition === 'left' && 'btn--prepend',
		iconPosition === 'right' && 'btn--append',
		disable && 'btn--disabled',
		icon && 'btn--icon',
	];
	return classes.join(' ');
}

export default Btn;
