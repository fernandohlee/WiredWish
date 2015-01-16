angular.module( 'ngBoilerplate.account', [
  'ui.router',
  'ngResource',
  'base64'
])

.controller( 'AccountCtrl', function WishlistsCtrl( $scope ) {
})
.factory('accountService', function($resource) {
    var service = {};
    service.register = function(account, success, failure) {
        var Account = $resource("/wiredwish/rest/accounts");
        Account.save({}, account, success, failure);
    };
    service.getAccountByUsername = function(userName) {
        var Account = $resource("/wiredwish/rest/accounts/userName/"+userName);
        return Account.get().$promise.then(function(data) {
            return data;
        });
    }; 
    return service;
})
.factory('sessionService', function($http, $base64, $state, accountService) {
    var session = {};
    session.login = function(data) {
        return $http.post("/wiredwish/login", "username=" + data.userName +
                "&password=" + data.password, {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                } ).then(function(response) {               
                    accountService.getAccountByUsername(data.userName).then(function(account){
                        localStorage.setItem("session", JSON.stringify({idAccount: account.rid, userName: account.userName}));
                        $state.go("wishlists");
                    });                           
                }, function(data) {
                    session.logout();
                    alert("error logging in");
                });
    };
    session.logout = function() {
        localStorage.removeItem("session");
        $state.go("home");
    };
    session.isLoggedIn = function() {
        return localStorage.getItem("session") !== null;
    };
    session.retrieveSession = function(){
        return JSON.parse( localStorage.getItem( 'session' ));
    },
    session.validateUserSession = function() {
        if(!session.isLoggedIn()){
            $state.go("home");
        }
    };
    return session;
})
;