export interface IFilter {
	phrase: string;
	size8: boolean;
	size16: boolean;
	size24: boolean;
	size32: boolean;
}

export interface ISVGIcon {
	d: string;
	size: number;
}

export interface IIcon {
	title: string;
	aliases: Array<string>;
	icon: ISVGIcon;
}
