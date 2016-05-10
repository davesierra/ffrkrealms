'use strict';

/**
 * @ngdoc function
 * @name ffrkrealmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ffrkrealmsApp
 */
angular.module('ffrkrealmsApp')
  .controller('AboutCtrl', function () {

    $(function () {
	    var options = {
	        cell_height: 80,
	        vertical_margin: 10
	    };
	    $('.grid-stack').gridstack(options);
	});
  });
