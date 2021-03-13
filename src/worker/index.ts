import { EUIAction, IUIAction } from '~/types';
import { PLUGIN_WIDTH, PLUGIN_HEIGHT } from '~/constants';

interface IIconPayload {
	d: string;
	size: number;
	name: string;
}

interface IResizePayload {
	width: number;
	height: number;
}

figma.showUI(__html__, { width: PLUGIN_WIDTH, height: PLUGIN_HEIGHT });

figma.ui.onmessage = function onMessage({ type, payload }: IUIAction): void {
	switch (type) {
		case EUIAction.CREATE_ICON:
			{
				// eslint-disable-next-line id-length
				const { d, size, name } = payload as IIconPayload;
				const frame = figma.createNodeFromSvg(`<svg x="0px" y="0px" viewBox="0 0 ${size} ${size}"><path fill-rule="evenodd" d="${d}" /></svg>`);

				frame.name = name;
				frame.children.forEach(child => {
					child.locked = true;
				});
				frame.x = figma.viewport.center.x - Math.round(frame.width / 2);
				frame.y = figma.viewport.center.y - Math.round(frame.height / 2);
				figma.currentPage.appendChild(frame);
				figma.currentPage.selection = [frame];
				figma.viewport.scrollAndZoomIntoView([frame]);
			}

			break;
		case EUIAction.RESIZE:
			{
				const { width, height } = payload as IResizePayload;

				figma.ui.resize(width, height);
			}

			break;
		default:
			//
	}
};
