angular.module( 'ngBoilerplate.partials', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngBoilerplate.account'
])
.controller("NavCtrl", function($scope, sessionService) {
    
    $scope.userName = sessionService.retrieveSession().userName;
    $scope.logOut = function(){
        sessionService.logout();
    };
    
})
;
