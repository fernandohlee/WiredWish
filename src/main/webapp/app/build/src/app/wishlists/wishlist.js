angular.module( 'ngBoilerplate.wishlists', [
  'ui.router',
  'ngBoilerplate.account',
  'ngResource',
  'smart-table'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'wishlists', {
    url: '/wishlists',
    views: {
      "main": {
        controller: 'WishlistsCtrl',
        templateUrl: 'wishlists/wishlists.tpl.html'
      }
    },
    data:{ pageTitle: 'Wishlists' }
  });
})

.controller( 'WishlistsCtrl', function WishlistsCtrl( $scope, $state, sessionService ) {
    sessionService.validateUserSession();
    $scope.userName = sessionService.retrieveSession().userName;
    
})

.controller('ModalNewWishlistCtrl', function ($scope, $modal, $log) {

  $scope.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'wishlists/newWishlist.tpl.html',
      controller: 'ModalInstanceNewWishlistCtrl'
    });
  };
})

.controller('ModalInstanceNewWishlistCtrl', function ($scope, $modalInstance, wishlistService, wishlistsBroadcastService) {
    
  $scope.wishlist = {
          name:"",description:""
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
  $scope.createWishlist = function(){      
      wishlistService.saveWishlist($scope.wishlist).then(
              function(newWishlist) {
                  $scope.cancel();
                  wishlistsBroadcastService.addWishlist({
                      idWishlist:newWishlist.idWishlist,
                      name:newWishlist.name,
                      description:newWishlist.description
                  });
              },function(reason) {
                  alert('wishlist creation failed');
              });
  };
})

.controller( 'WishlistsTableCtrl', function WishlistsTableCtrl( $scope, $state, sessionService, wishlistService, wishlistsBroadcastService) {
    $scope.wishlists = {};
    $scope.displayedCollection = {};
    
    $scope.populateTable = function(){
        wishlistService.findWishlistsByUsername(
                sessionService.retrieveSession().userName).then(
                function(data) {
                    $scope.wishlists = data.wishlists;
                    wishlistsBroadcastService.setWishlists($scope.wishlists);
                    $scope.displayedCollection = [].concat($scope.wishlists);
                    
                }, function() {
                    alert("error retrieving wishlist for user");
                });
    };
    
    $scope.removeItem = function removeItem(row) {
        var x=window.confirm("delete wishlist? ");
        if (x){

            wishlistService.deleteWishlistById(row.idWishlist).then(function(){
                var index = $scope.wishlists.indexOf(row);

                if (index !== -1) {
                    $scope.wishlists.splice(index, 1);
                }
            },function(error){
                alert("error deleting wishlist");
            });
        }
    };
    
    $scope.goToWishes = function(row) {
        $state.go("wishes", { idWishlist : row.idWishlist, wishlistName : row.name });
    };
    
    $scope.$on('handleWishlistsBroadcast', function() {
        $scope.wishlists = wishlistsBroadcastService.wishlists;
    });       

    $scope.populateTable();
})

/**
 * This service will help share the wishlists resource between modal window and the table
 */
.factory('wishlistsBroadcastService', function($rootScope) {
    var service = {};
    
    service.wishlists = {};

    service.setWishlists = function(wishlists){
        this.wishlists = wishlists;
    };
    
    service.addWishlist = function(wishlist) {
        this.wishlists.push(wishlist);
        this.broadcastItem();
    };

    service.broadcastItem = function() {
        $rootScope.$broadcast('handleWishlistsBroadcast');
    };

    return service;
})

.factory('wishlistService', function( $state, $resource, sessionService) {
    var service = {};

    service.saveWishlist = function(wishlist) {
        var Wishlist = $resource("/wiredwish/rest/accounts/:paramAccountId/wishlists");
        return Wishlist.save({paramAccountId: sessionService.retrieveSession().idAccount}, wishlist).$promise;
    };
    
    service.findWishlistById = function(idWishlist) {
        var Wishlists = $resource("/wiredwish/rest/wishlists/:paramIdWishlist");
        return Wishlists.get({paramIdWishlist: idWishlist}).$promise;
    };
    
    service.findWishlistsByUsername = function(userName) {
        var Wishlists = $resource("/wiredwish/rest/accounts/:paramUserName/wishlists");
        return Wishlists.get({paramUserName: userName}).$promise;
    };
    
    service.deleteWishlistById = function(idWishlist) {
        var Wishlists = $resource("/wiredwish/rest/wishlists/:paramIdWishlist");
        return Wishlists.remove({paramIdWishlist: idWishlist}).$promise;
    };
    
    return service;
})

;