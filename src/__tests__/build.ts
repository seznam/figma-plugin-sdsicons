/* eslint-env amd, node, jest */
import fs from 'fs';

import manifest from '../../manifest.json';

describe('build script', () => {
	// eslint-disable-next-line require-await
	it('should create the plugin.js and ui.html files in the dist folder', async () => {
		const pluginFilePath = manifest.main;
		const uiFilePath = manifest.ui;

		// JS worker existuje
		expect(fs.existsSync(`./${pluginFilePath}`)).toBeDefined();

		// HTML soubor existuje
		if (uiFilePath) {
			expect(fs.existsSync(`./${uiFilePath}`)).toBeDefined();
		}
	});
});
