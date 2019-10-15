import { IamHeader } from '@common/IamHeader';

export const components = {
	IamHeader,
};

export const el = '.js-app';

export const warnings = {
	WARN_NOT_FOUND_EL: `${el} is not found, VueApp.init() failed!`,
};

export const conf = {
	components,
	el,
	warnings,
};
