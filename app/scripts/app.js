'use strict';

/**
 * @ngdoc overview
 * @name ffrkrealmsApp
 * @description
 * # ffrkrealmsApp
 *
 * Main module of the application.
 */
angular
  .module('ffrkrealmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/characters', {
        templateUrl: 'views/characters.html',
        controller: 'CharactersCtrl',
        controllerAs: 'char'
      })
      .when('/character/:param', {
            templateUrl: 'views/character-detail.html',
            controller: 'CharacterDetailCtrl',
            controllerAs: 'charDetail'
      })
      .when('/relics', {
            templateUrl: 'views/relics.html',
            controller: 'RelicsCtrl',
            controllerAs: 'relics'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
