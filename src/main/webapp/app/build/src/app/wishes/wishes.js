angular.module( 'ngBoilerplate.wishes', [
  'ui.router',
  'ngBoilerplate.account',
  'ngBoilerplate.wishlists',
  'ngResource',
  'smart-table'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'wishes', {
    url: '/wishes/:idWishlist',
    views: {
      "main": {
        controller: 'WishesCtrl',
        templateUrl: 'wishes/wishes.tpl.html'
      }
    },
    resolve: {
        wishlist: function(wishlistService, $stateParams) {
            return  wishlistService.findWishlistById($stateParams.idWishlist);
        }
    },
    data:{ pageTitle: 'Wishes' }
    
    
  });
})

.controller( 'WishesCtrl', function WishesCtrl( $scope, $state, sessionService, $stateParams, wishlist ) {
    sessionService.validateUserSession();
    $scope.userName = sessionService.retrieveSession().userName;


        $scope.wishlistName = wishlist.name;
        $scope.wishlistDescription= wishlist.description;


})


.controller('ModalNewWishCtrl', function ($scope, $modal, $log) {

  $scope.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'wishes/newWish.tpl.html',
      controller: 'ModalInstanceNewWishCtrl'
    });
  };
})

.controller('ModalInstanceNewWishCtrl', function ($scope, $modalInstance, wishesBroadcastService, wishesService) {
    
  $scope.wish = {
          name:"",description:"",link:"",price:0,joyRatio:0,wishStatus:1
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
  $scope.assignjoyRatio = function (rate) {
   $scope.wish.joyRatio = rate;
  };
  
  $scope.createWish = function(){
      wishesService.saveWish($scope.wish).then(
              function(newWish) {
                  $scope.cancel();
                  wishesBroadcastService.addWish({
                      idWish:newWish.idWish,
                      name:newWish.name,
                      description:newWish.description,
                      link:newWish.link,
                      price:newWish.price,
                      joyRatio:newWish.joyRatio
                  });
              },function(reason) {
                  alert('wish creation failed');
              });
  };
})

.controller( 'WishesTableCtrl', function WishesTableCtrl( $scope, $state, wishesBroadcastService, wishesService) {
    
    $scope.wishes = {};
    $scope.displayedCollection = {};
    
    $scope.populateTable = function(){
        wishesService.findWishesByIdWishlist().then(
                function(data) {
                    $scope.wishes = data.wishes;
                    wishesBroadcastService.setWishes($scope.wishes);
                    $scope.displayedCollection = [].concat($scope.wishes);
                    
                }, function() {
                    alert("error retrieving wishes for user");
                });
    };
    
    $scope.test = function(){
      console.log(this.row);  
    };
    
    $scope.removeItem = function removeItem(row) {
        var x=window.confirm("delete wish? ");
        if (x){

            wishesService.deleteWishById(row.idWish).then(function(){
                var index = $scope.wishes.indexOf(row);

                if (index !== -1) {
                    $scope.wishes.splice(index, 1);
                }
            },function(error){
                alert("error deleting wishlist");
            });
        }
    };
    
    $scope.$on('handleWishesBroadcast', function() {
        $scope.wishes = wishesBroadcastService.wishes;
    });       

    $scope.populateTable();
})

/**
 * This service will help share the wishlists resource between modal window and the table
 */
.factory('wishesBroadcastService', function($rootScope) {
    var service = {};
    
    service.wishes = {};

    service.setWishes = function(wishes){
        this.wishes = wishes;
    };
    
    service.addWish = function(wish) {
        this.wishes.push(wish);
        this.broadcastItem();
    };

    service.broadcastItem = function() {
        $rootScope.$broadcast('handleWishesBroadcast');
    };

    return service;
})

.factory('wishesService', function( $state, $resource, $stateParams) {
    var service = {};

    service.saveWish = function(wish) {
        var Resource = $resource("/wiredwish/rest/wishlists/:paramIdWishlist/wishes");
        return Resource.save({paramIdWishlist: $stateParams.idWishlist}, wish).$promise;
    };
    
    service.findWishesByIdWishlist = function() {
        var Resource = $resource("/wiredwish/rest/wishlists/:paramIdWishlist/wishes");
        return Resource.get({paramIdWishlist:  $stateParams.idWishlist}).$promise;
    };
    
    service.deleteWishById = function(idWish) {
        var Wishlists = $resource("/wiredwish/rest/wishes/:paramIdWish");
        return Wishlists.remove({paramIdWish: idWish}).$promise;
    };
    
    return service;
})
;