var babyApp = angular.module('BabyAdventuresApp', ['ngRoute','myApp.home',
  'myApp.register']);

    babyApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
                  .when('/facilities', {
            templateUrl: 'partials/facilities-list.html',
            controller: 'FacilitiesListCtrl'
          })
           .when('/facilities/:facilityId', {
            templateUrl: 'partials/facilities-detail.html',
            controller: 'FacilitiesDetailCtrl'
          })
           .when('/feedback', {
            templateUrl: 'partials/feedback.html',
            controller: 'PostsController'
          })
          .when('/feedback/:post_id/comments',
          {
              controller: 'CommentsController',
              templateUrl: 'partials/comments.html'
          })
          .when('/about',
          {
              templateUrl: 'partials/about.html'
          })
          .when('/add',
          {
              templateUrl: 'partials/add.html',
              controller: 'AddController'
          })
          .when('/landing',
          {
              templateUrl: 'partials/landing.html'
          })
          .otherwise({
            redirectTo: '/home'
          });
      }]);

     babyApp.controller('FacilitiesListCtrl', ['$scope', 'FacilityService',
          function($scope, FacilityService) {
             FacilityService.getFacility().success(function(data) {
                   $scope.Facility = data
                   $scope.incrementUpvotes = function(post) {
               post.upvotes += 1;
             }
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

    babyApp.controller('PostsController', ['$scope','FacilityService', 
           function($scope,FacilityService) {
              $scope.posts = FacilityService.getPosts()   // CHANGE
              $scope.incrementUpvotes = function(post) {
               post.upvotes += 1;
            }
          $scope.addPost = function(){
          var new_id = 1 + $scope.posts[$scope.posts.length - 1].id
          $scope.posts.push({
            type: $scope.newPost.type,
            title: $scope.newPost.title,
            id: new_id,
            location: $scope.newPost.location,
            town: $scope.newPost.town,
            county: $scope.newPost.county,
            feedback: $scope.newPost.feedback,
            username : $scope.newPost.username,
            comments : [],
            upvotes: 0
          })
          $scope.newPost = { }
        }
    }])

    babyApp.controller('CommentsController', ['$scope',
       'FacilityService', 
       '$routeParams',
       function ($scope,FacilityService ,$routeParams) {
       FacilityService.getPost($routeParams.post_id)
        .success(function(post) {
             $scope.post = post;
        });

    $scope.incrementUpvotes = function(comment) {
       FacilityService.upvotePostComment($scope.post._id, comment._id , 
                comment.upvotes + 1 )
          .success(function(updated_comment) {
              comment.upvotes = updated_comment.upvotes
          })
    }
    $scope.addComment = function(){
            if($scope.comment.body === '') { return; }
            var comment = {
                body: $scope.comment.body,
                author: $scope.comment.author
            }
            FacilityService.addPostComment($scope.post._id, comment )
                .success(function(added_comment) {
                    $scope.post.comments.push(added_comment)
                    $scope.comment = {} ;   
                })
    }
}])

        babyApp.controller('AddController', ['$scope','FacilityService', 
           function($scope,FacilityService) {
              $scope.Adds = FacilityService.getAdds()   // CHANGE
              $scope.incrementUpvotes = function(post) {
               post.upvotes += 1;
            }
          $scope.addPost = function(){
          var new_id = 1 + $scope.Adds[$scope.Adds.length - 1].id
          $scope.Adds.push({
            id: new_id,
            location: $scope.newPost.location,
            town: $scope.newPost.town,
            county: $scope.newPost.county,
            username : $scope.newPost.username,
            upvotes: 0
          })
          $scope.newPost = { }
        }
    }])


    babyApp.factory('FacilityService', ['$http' , function($http){
      var posts = [{ 
                    type : 'Eating Out',
                    title : 'There is a great menu for Babies in Nine Restaurant',
                    location : 'Nine Restaurant, Georges Court',
                    id : 1,
                    feedback : 'I was pleasantly surprised at how great this restaurant is. There is a specific menu for kids of all ages and they have a childrens play area. ',
                    town : 'Waterford',
                    county : 'Waterford',
                    username : 'jbloggs',
                    comments : [],
                    upvotes : 10
                  }]
                  var Adds = [{ 
                    location : 'Nine Restaurant, Georges Court',
                    id : 1,
                    town : 'Waterford',
                    county : 'Waterford',
                    username : 'jbloggs',
                    upvotes : 9
                  }]
        var api = {
            getFacility : function() {
                return $http.get('facilities/facilities.json')            
             }, 
            getFacilities : function(id) {  // NEW
                     return $http.get('facilities/' + id + '.json')
                },
            getPosts : function() {
                return posts
             },
             getAdds : function() {
                return Adds
             },
             addPostComment : function(post_id, comment) {
          return $http.post('feedback/' + post_id + '/comments' ,
                            comment)
     },
            getPost : function(id) {
                var result = null
                posts.forEach(function(post){
                   if (post.id == id) {
                      result  = post
                    }
                } )
                return result
              }
            }
            return api
    }])