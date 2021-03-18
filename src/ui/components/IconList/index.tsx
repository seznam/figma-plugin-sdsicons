/* eslint-disable no-magic-numbers */
import React from 'react';
// @ts-ignore
import ICONS from '@sznds/icons/tester';
import { IFilter, IIcon } from '~/ui/interfaces';
import IconListSection from '~/ui/components/IconListSection';

import './style.css';

interface IIconListOptions {
	filter: IFilter;
}

function compare(first: IIcon, second: IIcon): number {
	return first.title.localeCompare(second.title);
}

export default function IconList({
	filter,
}: IIconListOptions) {
	const keys = Object.keys(ICONS).filter(key => ICONS[key].title.toLowerCase().indexOf(filter.phrase.toLowerCase()) !== -1 && key.indexOf('EMPTY_SYMBOL') === -1);
	const arr8: Array<IIcon> = [];
	const arr16: Array<IIcon> = [];
	const arr24: Array<IIcon> = [];
	const arr32: Array<IIcon> = [];
	const rest: Array<IIcon> = [];

	keys.forEach(key => {
		const size = parseInt(key.substring(key.lastIndexOf('_') + 1, key.length));

		switch (size) {
			case 8:
				arr8.push(ICONS[key]);
				break;
			case 16:
				arr16.push(ICONS[key]);
				break;
			case 24:
				arr24.push(ICONS[key]);
				break;
			case 32:
				arr32.push(ICONS[key]);
				break;
			default:
				rest.push(ICONS[key]);
		}
	});

	arr8.sort(compare);
	arr16.sort(compare);
	arr24.sort(compare);
	arr32.sort(compare);
	rest.sort(compare);

	return <div className="iconList">
		{filter.size8 && arr8.length ? <IconListSection icons={arr8} title="8×8" /> : null}
		{filter.size16 && arr16.length ? <IconListSection icons={arr16} title="16×16" /> : null}
		{filter.size24 && arr24.length ? <IconListSection icons={arr24} title="24×24" /> : null}
		{filter.size32 && arr32.length ? <IconListSection icons={arr32} title="32×32" /> : null}
		{rest.length ? <IconListSection icons={rest} title="Nezařazené" /> : null}
	</div>;
}
