'use strict';

require('../../src/scripts/app/controllers/_loader');

var loader = require('../../src/scripts/utilities/loader');

describe('Controllers', function () {

    loader.createSpyLoader('main', 'spy loader data');

    describe('RootCtrl', function () {
        var $scope;

        beforeEach(angular.mock.module('mCtrls'));

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('RootCtrl', { $scope: $scope });
        }));

        it('Placeholder', function () {
            expect($scope.test).toBe('ahoj');
        });

    });
});
