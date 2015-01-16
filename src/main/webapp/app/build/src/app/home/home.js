angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'ngBoilerplate.account'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})
.controller( 'HomeCtrl', function HomeController( $state) {
})
.controller("LoginCtrl", function($scope, sessionService, accountService) {
    $scope.login = function() {

        sessionService.login($scope.account);

    };
})
.controller("RegisterCtrl", function($scope, $state, accountService, sessionService) {
    $scope.register = function() {
        accountService.register($scope.account,
        function(returnedData) {
            sessionService.login($scope.account);
        },
        function() {
            alert("Error registering user");
        });
    };
})
;

