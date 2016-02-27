var app = angular.module('thheating', ['ui.router', 'ngMaterial']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/'
        // controller: 'HomeController'
      });

    $urlRouterProvider.otherwise('/');
  }
]);
