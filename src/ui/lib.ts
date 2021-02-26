import { IUIAction } from '../types';

// Sends a message to the plugin worker
export function postMessage({ type, payload }: IUIAction): void {
	parent.postMessage({ pluginMessage: { type, payload } }, '*');
}
