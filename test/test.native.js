/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var gamma = require( '@stdlib/math-base-special-gamma' );
var abs = require( '@stdlib/math-base-special-abs' );
var incrspace = require( '@stdlib/array-base-incrspace' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var gamma1pm1 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( gamma1pm1 instanceof Error )
};


// FIXTURES //

var smallPositive = require( './fixtures/cpp/small_positive.json' );
var smallNegative = require( './fixtures/cpp/small_negative.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gamma1pm1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes `gamma(x+1) - 1` for most `x` (negative)', opts, function test( t ) {
	var expected;
	var val;
	var x;
	var y;
	var i;
	x = incrspace( -170.5, -0.5, 0.5 );
	for ( i = 0; i < x.length; i++ ) {
		// Add 0.1, as the gamma function is not defined for negative integers:
		val = x[ i ] + 0.1;
		y = gamma1pm1( val );
		expected = gamma( val+1.0 ) - 1.0;
		t.strictEqual( y, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes `gamma(x+1) - 1` for most `x` (positive)', opts, function test( t ) {
	var expected;
	var val;
	var x;
	var y;
	var i;
	x = incrspace( 2.0, 170.5, 0.5 );
	for ( i = 0; i < x.length; i++ ) {
		val = x[ i ];
		y = gamma1pm1( val );
		expected = gamma( val+1.0 ) - 1.0;
		t.strictEqual( y, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function accurately computes `gamma(x+1) - 1` for small negative numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gamma1pm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 5.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function accurately computes `gamma(x+1) - 1` for small positive numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var i;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		v = gamma1pm1( x[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 2.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. Value: ' + v + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var val = gamma1pm1( NaN );
	t.strictEqual( isnan( val ), true, 'returns expected value' );
	t.end();
});
