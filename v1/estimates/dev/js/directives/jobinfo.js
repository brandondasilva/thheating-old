app.directive('jobinfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/jobinfo.html'
  }
});
