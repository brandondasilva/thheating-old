var app = angular.module('estimates-widget', ['ui.router', 'ngMaterial', 'duScroll']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html'
      });

    $urlRouterProvider.otherwise('/');
  }
]);

// app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
//   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//     $location.hash($routeParams.scrollTo);
//     $anchorScroll();
//   });
// });

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
