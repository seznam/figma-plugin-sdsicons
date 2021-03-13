/* eslint-disable id-length */
import React, { useEffect, useRef } from 'react';
import { PLUGIN_WIDTH, PLUGIN_HEIGHT, PLUGIN_MIN_WIDTH, PLUGIN_MIN_HEIGHT } from '~/constants';
import { EUIAction } from '~/types';

import './style.css';

export default function Resizer() {
	const resizerRef = useRef<HTMLDivElement>(null);

	useEffect(function listenerEffect() {
		let width = PLUGIN_WIDTH;
		let height = PLUGIN_HEIGHT;
		let x = 0;
		let y = 0;

		function pointerMove(event: MouseEvent) {
			parent.postMessage({ pluginMessage: { type: EUIAction.RESIZE, payload: { width: Math.max(width + (event.x - x), PLUGIN_MIN_WIDTH), height: Math.max(height + (event.y - y), PLUGIN_MIN_HEIGHT) } } }, '*');
		}

		function pointerDown(event: MouseEvent) {
			x = event.x;
			y = event.y;

			window.addEventListener('pointermove', pointerMove);
		}

		function pointerUp(event: MouseEvent) {
			width = Math.max(width + (event.x - x), PLUGIN_MIN_WIDTH);
			height = Math.max(height + (event.y - y), PLUGIN_MIN_HEIGHT);

			window.removeEventListener('pointermove', pointerMove);
		}

		resizerRef.current?.addEventListener('pointerdown', pointerDown);
		document.addEventListener('pointerup', pointerUp);

		return function listerEffectCleanup() {
			resizerRef.current?.removeEventListener('pointerdown', pointerDown);
			document.removeEventListener('pointerup', pointerUp);
		};
	}, []);

	return <div className="resizer" ref={resizerRef}></div>;
}
