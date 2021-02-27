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

	function on8Change(event: React.ChangeEvent<HTMLInputElement>) {
		onChange({
			...filter,
			size8: event.target.checked,
		});
	}

	function on16Change(event: React.ChangeEvent<HTMLInputElement>) {
		onChange({
			...filter,
			size16: event.target.checked,
		});
	}

	function on24Change(event: React.ChangeEvent<HTMLInputElement>) {
		onChange({
			...filter,
			size24: event.target.checked,
		});
	}

	function on32Change(event: React.ChangeEvent<HTMLInputElement>) {
		onChange({
			...filter,
			size32: event.target.checked,
		});
	}

	return <form className="filter__form">
		<label className="filter__label">
			<span>Filtr</span>
			<input type="text" onChange={onInputChange} className="filter__input" />
		</label>
		<p className="filter__p">
			<label className="filter__sizeLabel">
				<input type="checkbox" className="filter__checkbox" checked={filter.size8} onChange={on8Change} />
				8×8
			</label>
			<label className="filter__sizeLabel">
				<input type="checkbox" className="filter__checkbox" checked={filter.size16} onChange={on16Change} />
				16×16
			</label>
			<label className="filter__sizeLabel">
				<input type="checkbox" className="filter__checkbox" checked={filter.size24} onChange={on24Change} />
				24×24
			</label>
			<label className="filter__sizeLabel">
				<input type="checkbox" className="filter__checkbox" checked={filter.size32} onChange={on32Change} />
				32×32
			</label>
		</p>
	</form>;
}
