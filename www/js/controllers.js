angular.module('starter.controllers', [])

.controller('home', function($scope, $ionicModal, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	$scope.$on('$ionicView.enter', function(e) {

		console.log("enter")
	});




})
.controller('usercenter', function($scope, $ionicModal, $timeout,jmessage) {

	$scope.user={};
	$scope.$on('$ionicView.enter', function(e) {
        jmessage.getUserInfo().then(function(response){
        	$scope.user= response;
        	console.log(response);
        });
		console.log("enter")
	});




})
.controller('chat', function($scope) {

	JMessagePlugin.register("wxllzf", "123456", function() {
		alert("success");
	}, function() {
		alert("error");
	})
});