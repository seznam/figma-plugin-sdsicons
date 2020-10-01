export enum EUIAction {
	CREATE_ICON = 'CREATE_ICON',
}

export interface IUIAction {
	type: EUIAction;
	payload?: any;
}
