import React from 'react';
import { IFilter } from '~/ui/interfaces';

import './style.css';

interface IFilterOptions {
	filter: IFilter,
	onChange: Function,
}

export default function Filter({
	filter,
	onChange,
}: IFilterOptions) {
	function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange({
			...filter,
			phrase: event.target.value,
		});
	}

	return <form className="filter__form">
		<label className="filter__label">
			<span>Filtr</span>
			<input type="text" onChange={onInputChange} className="filter__input" />
		</label>
	</form>;
}
