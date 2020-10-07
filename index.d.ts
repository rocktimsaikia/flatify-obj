declare namespace flatifyObject {
	interface Options {
		/**
        Removes the parent property and only returns the leaf nodes of the object
        @default false;
        */
		readonly onlyLeaves?: boolean;
	}
}

/**
 * Flatten nested javascript objects into a single-depth object.
  @example
 ```js
    const flatifyObject = require('flatify-obj');

    flatifyObject({foo: {bar: {unicorn: '🦄'}}})
    //=> { 'foo.bar.unicorn': '🦄' }

    flatifyObject({foo: {unicorn: '🦄'}, bar: 'unicorn'}, {onlyLeaves: true});
    //=> {unicorn: '🦄', bar: 'unicorn'}
 ```
 */
declare function flatifyObject<T = Record<string|number|symbol, unknown>>(
	object: T,
	options?: flatifyObject.Options
): T;

export = flatifyObject;
