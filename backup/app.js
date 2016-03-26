var babyApp = angular.module('BabyAdventuresApp', ['ngRoute']);

    babyApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
          })
          .when('/facilities', {
            templateUrl: 'partials/facilities-list.html',
            controller: 'FacilitiesListCtrl'
          })
           .when('/facilities/:facilityId', {
            templateUrl: 'partials/facilities-detail.html',
            controller: 'FacilitiesDetailCtrl'
          })
          .otherwise({
            redirectTo: '/home'
          });
      }]);

     babyApp.controller('HomeCtrl', ['$scope', 'FacilityService',
          function($scope, FacilityService) {
             FacilityService.getFacility().success(function(data) {
                   $scope.Facility = data
                 })
          }])
     babyApp.controller('FacilitiesListCtrl', ['$scope', 'FacilityService',
          function($scope, FacilityService) {
             FacilityService.getFacility().success(function(data) {
                   $scope.Facility = data
                 })
             $scope.orderProp = 'age';
          }])
    
    babyApp.controller('FacilitiesDetailCtrl', 
         ['$scope', '$location', '$routeParams', 'FacilityService', 
         function($scope, $location, $routeParams, FacilityService) {
             FacilityService.getFacilities($routeParams.facilityId)
                .success(function(data) {
                   $scope.Facilities = data
                   $scope.img = $scope.Facilities.images[0]
                   })
                .error(function(err) {
                    $location.path('./facilities') 
                  })
             $scope.setImage = function(img) {
                  $scope.img = img
               }
      }])

    babyApp.factory('FacilityService', ['$http' , function($http){
        var api = {
            getFacility : function() {
                return $http.get('facilities/facilities.json')            
             }, 
            getFacilities : function(id) {  // NEW
                     return $http.get('facilities/' + id + '.json')
                }
            }
            return api
    }])