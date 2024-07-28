import React from 'react'
import './style.scss'
import type FlexColProps from './type'

const FlexCol = ({ xs = 24, sm = 0, md = 0, lg = 0, xl = 0, xxl = 0, center = false, children }: FlexColProps) => {
	return (
		<div className={['col', ...center ? ['col--center'] : [], colClassname(xs, sm, md, lg, xl, xxl)].join(' ')}>
			{ children }
		</div>
	)
}

const colClassname = (xs: number, sm: number, md: number, lg: number, xl: number, xxl: number): string => {
	const classes: string[] = []
	classes.push(generatorClass(xs, 'xs'))
	classes.push(generatorClass(sm, 'sm'))
	classes.push(generatorClass(md, 'md'))
	classes.push(generatorClass(lg, 'lg'))
	classes.push(generatorClass(xl, 'xl'))
	classes.push(generatorClass(xxl, 'xxl'))

	return classes.join(' ')
}

const generatorClass = (size: number, breackpoint: string) => {
	if (typeof size === 'undefined' || size === null) {
		return ''
	}

	return size === 0 ? '' : `col-${breackpoint}-${size}`
}

export default FlexCol
