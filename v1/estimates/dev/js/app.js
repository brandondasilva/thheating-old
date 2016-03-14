var app = angular.module('estimates-widget', ['ui.router', 'ngMaterial']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/'
        // controller: 'HomeController'
      })
      .state('login', {
        url: '/',
        templateUrl: 'views/login.html'
      });

    $urlRouterProvider.otherwise('/');
  }
]);
