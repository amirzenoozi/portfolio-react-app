import React from 'react';
import { HyperlinkProps } from '@/components/hyperlink/type';
import { ClassNames } from '@/modules/classNames';
import './style.scss';

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
	const CN = new ClassNames('hyperlink');

	const BtnClassGenerator = (variant: string, icon: boolean, iconName: string, iconPosition: string) => {
		return CN.generate('', [
			variant,
			...(iconPosition === 'left') ? ['prepend'] : [],
			...(iconPosition === 'right') ? ['append'] : [],
			...icon ? ['icon'] : [],
		])
	};

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

export default Hyperlink;
