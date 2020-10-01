import React, { useState } from 'react';
import Filter from '~/ui/components/Filter';
import IconList from '~/ui/components/IconList';
import { IFilter } from '~/ui/interfaces';

import './style.css';

const DEFAULT_FILTER: IFilter = {
	phrase: '',
	size: 0,
};

export default function App() {
	const [filter, setFilter] = useState(DEFAULT_FILTER);

	return <main className="app__main">
		<Filter filter={filter} onChange={setFilter} />
		<IconList filter={filter} />
	</main>;
}
