app.directive('tableofcontents', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/tableofcontents.html'
  }
});
