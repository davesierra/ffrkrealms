'use strict';

/**
 * @ngdoc function
 * @name ffrkrealmsApp.controller:RelicCtrl
 * @description
 * # RelicCtrl
 * Controller of the ffrkrealmsApp
 */
angular.module('ffrkrealmsApp')
.controller('RelicsCtrl', function (relics) {

	console.log( relics.imgId('https://ffrk.denagames.com/dff/static/lang/ww/compile/en/image/gacha_series/promotion_image/8401.png') )

	var relicSite = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20data.html.cssselect%20WHERE%20url%3D'http%3A%2F%2Fbantha.org%2F~dscotton%2Fffrk.html'%20AND%20css%3D'h2%2C%20img'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
	
	$.ajax({
	     url: relicSite,
	     type: "GET",
	     // dataType: 'text',
	     success: function(data) {

	     	console.log(data);
	          // var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
	          // for(var i = 0; i < elements.length; i++) {
	          //      var theText = elements[i].firstChild.nodeValue;
	          //      // Do something here
	          // }
	     }
	});

	// https://ffrk.denagames.com/dff/static/lang/ww/compile/en/image/gacha_series/promotion_image/8401.png
	// where 8401 is 84 = banner number and 01 = relic in that banner
})

.service('relics', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    };

    this.imgId = function(string) {
	    var imgId;
			var start = string.lastIndexOf("/") +1;
			var end = string.lastIndexOf(".");
			var imgId = string.substring(start, end);

			return imgId;
    }
});