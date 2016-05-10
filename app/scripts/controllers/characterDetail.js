'use strict';

/**
 * @ngdoc function
 * @name ffrkrealmsApp.controller:CharacterDetailCtrl
 * @description
 * # CharacterDetailCtrl
 * Controller of the ffrkrealmsApp
 */
angular.module('ffrkrealmsApp')
  .controller('CharacterDetailCtrl', function ($scope, $http, $routeParams) {
    console.log('this is charactersDetail controller');
    

    var chars = Lockr.get('characters'),
    	charIndex = $routeParams.param,
    	charStats = chars[charIndex]

    console.log(charIndex, charStats);

    $scope.character = charStats;

    console.log(charStats.hp);

    console.log(parseInt(charStats.hp), 
	            	parseInt(charStats.atk), 
	            	parseInt(charStats.def), 
	            	parseInt(charStats.mag), 
	            	parseInt(charStats.res), 
	            	parseInt(charStats.mnd), 
	            	parseInt(charStats.acc),
	            	parseInt(charStats.eva),
	            	parseInt(charStats.spd)
	            	)

    var data = {
	    labels: ["HP", "Attack", "Defense", "Magic", "Resist", "Mind", "Speed"],
	    datasets: [
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [
	            	parseInt(charStats.hp*.025),
	            	parseInt(charStats.atk), 
	            	parseInt(charStats.def), 
	            	parseInt(charStats.mag), 
	            	parseInt(charStats.res), 
	            	parseInt(charStats.mnd),
	            	parseInt(charStats.spd*.75)
	            ]
	        }
	    ]
	};
    var ctx = $("#charChart").get(0).getContext("2d");
    var myNewChart = new Chart(ctx).Radar(data);

  });
