import test from 'ava';
import flatifyObject from '.';

test('throw error on non object types', t => {
	t.throws(() => {
		flatifyObject(null);
	}, {
		instanceOf: TypeError,
		message: 'Expected a type object, got null'
	});

	t.throws(() => {
		flatifyObject('unicorn');
	}, {
		instanceOf: TypeError,
		message: 'Expected a type object, got string'
	});
});

test('main test without any option', t => {
	const flattended = flatifyObject({foo: {unicorn: '🦄'}, bar: 'unicorn'});
	const expected = {'foo.unicorn': '🦄', bar: 'unicorn'};

	t.deepEqual(flattended, expected);
});

test('test nested objects', t => {
	const flattended = flatifyObject({foo: {bar: {unicorn: '🦄'}}});
	const expected = {'foo.bar.unicorn': '🦄'};

	t.deepEqual(flattended, expected);
});

test('with option - onlyLeaves set to true', t => {
	const flattended = flatifyObject({foo: {unicorn: '🦄'}, bar: 'unicorn'}, {onlyLeaves: true});
	const expected = {unicorn: '🦄', bar: 'unicorn'};

	t.deepEqual(flattended, expected);
});

