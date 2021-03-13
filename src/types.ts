export enum EUIAction {
	CREATE_ICON = 'CREATE_ICON',
	RESIZE = 'RESIZE',
}

export interface IUIAction {
	type: EUIAction;
	payload?: any;
}
