var chai = require('chai');
var expect = chai.expect;
var History = require('../history.js');

describe('testing main functionality of my-history', function () {

    beforeEach(function () {
        History.add('first');
        History.add('second');
        History.add('third');
        History.add('fourth');
    });

    it('current should be fourth', function () {
        expect(History.current()).to.equal('fourth');
    });

    it('should return third when back is called', function () {
        expect(History.back()).to.equal('third');
    });

    it('should return fourth when back and fwd called together', function () {
        History.back();
        expect(History.fwd()).to.equal('fourth');
    });

    it('should return fifth as current after fifth is added', function () {
        History.add('fifth');
        expect(History.current()).to.equal('fifth');
    });

    it('should return null if fwd is called after add', function () {
        History.add('fifth');
        expect(History.fwd()).to.equal(null);
    });

    it('should return null when the history is emptied', function () {
        History.clear();

        expect(History.current()).to.equal(null);
        expect(History.back()).to.equal(null);
        expect(History.fwd()).to.equal(null);

    });

    it('should return second when fwd is called after calling back too many times', function () {
        for(var i = 0; i < 20; i += 1) {
            History.back();
        }

        expect(History.fwd()).to.equal('second');
    });

    it('should return third when back is called after calling fwd too many times', function () {
        for(var i = 0; i < 20; i += 1) {
            History.fwd();
        }

        expect(History.back()).to.equal('third');
    });
});