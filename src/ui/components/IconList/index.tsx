import React from 'react';
import Icon from '~/ui/components/Icon';
// @ts-ignore
import ICONS from '@sznds/icons/tester';
import { UIActionTypes } from '~/types';
import { IFilter } from '~/ui/interfaces';

import './style.css';

interface IIconListOptions {
	filter: IFilter;
}

export default function IconList({
	filter,
}: IIconListOptions) {
	const keys = Object.keys(ICONS).filter(key => ICONS[key].title.toLowerCase().indexOf(filter.phrase.toLowerCase()) !== -1 && key.indexOf('EMPTY_SYMBOL') === -1);

	return <ul className="iconList__ul">
		{keys.map(key => {
			const index = ICONS[key].title.lastIndexOf(' ');

			return <li key={key} title={ICONS[key].title.substring(index + 1)} className="iconList__li" onClick={() => {
				parent.postMessage({ pluginMessage: { type: UIActionTypes.CREATE_ICON, payload: { ...ICONS[key].icon, name: ICONS[key].title } } }, '*');
			}}>
				<Icon symbol={ICONS[key].icon} className="iconList__icon" />
				<p className="iconList__title">{ICONS[key].title.substring(0, index)}</p>
			</li>;
		})}
	</ul>;
}
