app.directive('navbar', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'templates/partials/navbar.ejs'
  }
});
