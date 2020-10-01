import React, { memo } from 'react';
// @ts-ignore
import { EMPTY_SYMBOL_24 } from '@sznds/icons';

import './style.css';

export interface IIconOptions extends React.SVGAttributes<SVGElement> {
	symbol: {
		d: string;
		size: number;
	};
	className?: string;
}

/**
 * Icon component represents one of the built-in SVG icons packed with SDS
 * @param {IconProps} props An object with properties
 */
export default memo(function Icon({
	symbol = EMPTY_SYMBOL_24,
	className = '',
	...props
}: IIconOptions) {
	// eslint-disable-next-line id-length
	const { d, size } = symbol;

	// focusable="false" is necessary because of an IE bug, where every SVG without it appears in tab order (ie. to tab out of a button you need to tab twice)
	return <svg x="0px" y="0px" viewBox={`0 0 ${size} ${size}`} focusable="false" className={`icon icon--${size} ${className}`} {...props}>
		<path fillRule="evenodd" d={d} />
	</svg>;
});
