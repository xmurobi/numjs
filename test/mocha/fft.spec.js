'use strict';

/* jshint ignore:start */
var expect = require('expect.js');
/* jshint ignore:end */
var _ = require('lodash');
var nj = require('../../src');

describe('fft', function () {
    it('should work on vectors', function () {
        var C = nj.random([10, 2]),
            fft = nj.fft(C),
            ifft = nj.ifft(fft);

        expect(ifft.multiply(10000).round().tolist())
            .to.eql(C.multiply(10000).round().tolist());

    });
});