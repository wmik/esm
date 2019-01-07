import test from 'ava';
import pkg from '.';

test('pkg name', t => {
	t.is(pkg.version, '0.0.0-development');
});
