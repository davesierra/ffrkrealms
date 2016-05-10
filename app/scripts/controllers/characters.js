'use strict';

/**
 * @ngdoc function
 * @name ffrkrealmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ffrkrealmsApp
 */
angular.module('ffrkrealmsApp')
  .controller('CharactersCtrl', function ($scope, $http) {
    console.log('this is characters controller');

    // var vm = this;
    $scope.characters = Lockr.get('characters'); //get chars from localstorage

    if ($scope.characters) {
    	console.log('lockr storage exists', $scope.characters)
    	return false; //break if localstr exists, otherwise retrieve from google sheet
    }

    var params = {
		sheetId: "1bl5TBDrXoYNDYPGI8Tskb3Tz3Nm3Kq_SSNHxZm9Jx9c",
		scope : $scope,
		http: $http
	};

	sheets(params).getData();

	$scope.dataParse = function(entries){		
		console.log('dataParse entries:', entries);

  		$scope.characters = entries;

  		Lockr.set('characters', entries);
	};

  });
