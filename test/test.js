var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml(input, [plugin(opts)]);

   expect(proccessed).to.eql(output);
};

describe('postxml-ng-valid', function () {
    it('one directive', function () {
        test(
            '<div ng-bind="data" ng-if="true" data-ng-hide="false"></div>',
            '<div data-ng-bind="data" data-ng-if="true" data-ng-hide="false"></div>',
            {}
        );
    });
});
