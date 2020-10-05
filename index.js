'use strict';
const cleanDeep = require('clean-deep');

const flatifyObject = (object, options) => {
	options = {
		onlyLeaves: false,
		...options
	};

	const flattened = {};

	for (const key in object) {
		if (!Object.hasOwnProperty.call(object, key)) {
			continue;
		}

		if ((typeof object[key]) === 'object' && object[key] !== null) {
			const flatObject = flatifyObject(object[key]);
			for (const flatObjectKey in flatObject) {
				if (!Object.hasOwnProperty.call(flatObject, flatObjectKey)) {
					continue;
				}

				if (options.onlyLeaves) {
					flattened[flatObjectKey] = flatObject[flatObjectKey];
				} else {
					flattened[key + '.' + flatObjectKey] = flatObject[flatObjectKey];
				}
			}
		} else {
			flattened[key] = object[key];
		}
	}

	return cleanDeep(flattened, {...options});
};

module.exports = (input, options) => {
	if (typeof input !== 'object' || input === null) {
		throw new TypeError(`Expected a type object, got ${input === null ? input : typeof input}`);
	}

	return flatifyObject(input, options);
};
