/* eslint-disable no-magic-numbers */
import React from 'react';
import Icon from '~/ui/components/Icon';
import { EUIAction } from '~/types';
import { IIcon } from '~/ui/interfaces';

import './style.css';

interface IIconListSectionOptions {
	icons: Array<IIcon>;
	title: string;
}

export default function IconListSection({
	icons,
	title,
}: IIconListSectionOptions) {
	return <div className="iconListSection">
		<h2 className="iconListSection__h2">{title}</h2>
		<ul className="iconListSection__ul">
			{icons.map(icon => {
				const index = icon.title.lastIndexOf(' ');

				return <li key={icon.icon.d} title={icon.title.substring(index + 1)} className="iconListSection__li" onClick={() => {
					parent.postMessage({ pluginMessage: { type: EUIAction.CREATE_ICON, payload: { ...icon.icon, name: icon.title } } }, '*');
				}}>
					<Icon symbol={icon.icon} className="iconListSection__icon" />
					<p className="iconListSection__title">{icon.title.substring(0, index)}</p>
				</li>;
			})}
		</ul>
	</div>;
}
