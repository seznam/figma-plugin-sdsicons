/* eslint-disable no-magic-numbers */
import { EUIAction, IUIAction } from '~/types';

interface IIconPayload {
	d: string;
	size: number;
	name: string;
}

figma.showUI(__html__, { width: 360, height: 320 });

figma.ui.onmessage = function onMessage({ type, payload }: IUIAction): void {
	switch (type) {
		case EUIAction.CREATE_ICON:
			{
				// eslint-disable-next-line id-length
				const { d, size, name } = payload as IIconPayload;
				const frame = figma.createNodeFromSvg(`<svg x="0px" y="0px" viewBox="0 0 ${size} ${size}"><path fillRule="evenodd" d="${d}" /></svg>`);

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
		default:
			//
	}
};
