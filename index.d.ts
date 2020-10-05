
interface Options {
	/**
    Only returns the leaf nodes of the object
    @default false;
    */
	readonly onlyLeaves?: boolean;

	/**
    Remove specific keys, ie: ['foo', 'bar', ' ']
    @default [];
    */
	readonly cleanKeys?: string[];

	/**
    Remove specific values, ie: ['foo', 'bar', ' ']
    @default [];
    */
	readonly cleanValues?: string[];

	/**
    Remove empty arrays, ie: []
    @default true;
    */
	readonly emptyArrays?: boolean;

	/**
    Remove empty objects, ie: {}
    @default true;
    */
	readonly emptyObjects?: boolean;

	/**
    Remove empty strings, ie: `''`
    @default true;
    */
	readonly emptyStrings?: boolean;

	/**
    Remove NaN values, ie: `NaN`
    @default false;
    */
	readonly NaNValues?: boolean;

	/**
    Remove null values, ie: `null`
    @default true;
    */
	readonly nullValues?: boolean;

	/**
    Remove undefined values, ie: `undefined`
    @default true
    */
	readonly undefinedValues?: boolean;
}

/**
 * Flatten nested javascript objects into a single-depth object.
  @example
 ```js
    const flattenObject = require('flatify-obj');

    flattenObject({foo: {bar: {unicorn: '🦄'}}})
    //=> { 'foo.bar.unicorn': '🦄' }

    flattenObject({foo: {unicorn: '🦄'}, bar: 'unicorn'}, {onlyLeaves: true});
    //=> {unicorn: '🦄', bar: 'unicorn'}
 ```
 */
declare function _exports(input: Record<string, unknown>, options: Options): Record<string, unknown>;
export = _exports;
