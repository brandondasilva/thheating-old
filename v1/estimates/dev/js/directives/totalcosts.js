app.directive('totalcosts', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/totalcosts.html'
  }
});
