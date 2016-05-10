'use strict';

/**
 * @ngdoc filter
 * @name ffrkrealmsApp.filter:characterFilter
 * @function
 * @description
 * # characterFilter
 * Filter in the ffrkrealmsApp.
 */
angular.module('ffrkrealmsApp')
  .filter('characterFilter', function () {
    return function (input) {
    	var string = input.replace(/ /g,"_");
    	return string;
    };
  });
