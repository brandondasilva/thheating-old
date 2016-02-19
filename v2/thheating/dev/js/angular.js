var app = angular.module('thheating', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.ejs',
        controller: 'HomeController'
      });

    $urlRouterProvider.otherwise('home');
  }
]);
