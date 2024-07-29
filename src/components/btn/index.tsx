import React from 'react';
import Icon from '@icon-park/react/es/all';
import './style.scss';
import { BtnProps } from '@/components/btn/type';
import { ClassNames } from '@/modules/classNames';

const Btn: React.FC<BtnProps> = ({
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
	const CN = new ClassNames('btn');

	const BtnClassGenerator = (variant: string, icon: boolean, iconName: string, iconPosition: string, disable: boolean) => {
		return CN.generate('', [
			variant,
			...(iconPosition === 'left') ? ['prepend'] : [],
			...(iconPosition === 'right') ? ['append'] : [],
			...icon ? ['icon'] : [],
			...disable ? ['disable'] : [],
		])
	};

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

export default Btn;
