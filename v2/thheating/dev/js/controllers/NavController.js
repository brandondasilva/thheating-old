app.controller('NavController', ['$scope', function($scope) {
  $scope.leftnav = {
    logo: 'images/websitelogo.png'
  };

  $scope.rightnav = [
    {
      title: 'About',
      click: ''
    },
    {
      title: 'Services',
      click: ''
    },
    {
      title: 'Products',
      click: ''
    },
    {
      title: 'Job Postings',
      click: ''
    },
    {
      title: 'Contact',
      click: ''
    }
  ];

  $scope.dropdown = [
    {
      title: 'Residential',
      click: ''
    },
    {
      title: 'Commercial',
      click: ''
    },
    {
      title: 'Service',
      click: ''
    },
    {
      title: 'Sheet Metal Fabrication',
      click: ''
    }
  ];
}]);

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
});
