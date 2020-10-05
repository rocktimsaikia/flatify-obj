const test = require('ava');
const flatObjects = require('.');

test('throw error on non object types', t => {
	t.throws(() => {
		flatObjects(null);
	}, {
		instanceOf: TypeError,
		message: 'Expected a type object, got null'
	});

	t.throws(() => {
		flatObjects('unicorn');
	}, {
		instanceOf: TypeError,
		message: 'Expected a type object, got string'
	});
});

test('main test without any option', t => {
	const flattended = flatObjects({foo: {unicorn: '🦄'}, bar: 'unicorn'});
	const expected = {'foo.unicorn': '🦄', bar: 'unicorn'};

	t.deepEqual(flattended, expected);
});

test('with option - onlyLeaves set to true', t => {
	const flattended = flatObjects({foo: {unicorn: '🦄'}, bar: 'unicorn'}, {onlyLeaves: true});
	const expected = {unicorn: '🦄', bar: 'unicorn'};

	t.deepEqual(flattended, expected);
});

test('tests for options of clean-deep module', t => {
	const flattended = flatObjects({foo: {unicorn: '🦄'}, bar: 'unicorn', test: 'test'}, {onlyLeaves: true, cleanKeys: ['test']});
	const expected = {unicorn: '🦄', bar: 'unicorn'};

	t.deepEqual(flattended, expected);
});

