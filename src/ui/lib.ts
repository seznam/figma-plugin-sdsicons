import { UIAction } from '../types';

// Sends a message to the plugin worker
export function postMessage({ type, payload }: UIAction): void {
	parent.postMessage({ pluginMessage: { type, payload } }, '*');
}
