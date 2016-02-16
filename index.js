(function(angular) {
    'use strict';

    var sweet = angular.module('ngNotie', []);

    var notie = require('notie');

    var service = function($rootScope) {
        this.alert = function() {
            var args = [].slice.call(arguments, 0);
            notie.alert.apply(undefined, args);
        };

        this.confirm = function() {
            var args = [].slice.call(arguments, 0);
            notie.confirm.apply(undefined, args);
        };

        this.input = function() {
            var args = [].slice.call(arguments, 0);
            notie.input.apply(undefined, args);
        };
    };

    sweet.service('notie', ['$rootScope', service]);

}(angular));
