app.directive('othercosts', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/othercosts.html'
  }
});
