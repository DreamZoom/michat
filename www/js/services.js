angular.module('starter.services', [])
	.service("user", function($rootScope, $location, $state, $http, $ionicPopup, $ionicModal) {

		
		

	})
	.service("jmessage", function($q, $rootScope, $location, $state, $http, $ionicPopup, $ionicModal) {

        //注册用户
		this.register = function(username, password) {
			var deferred = $q.defer();

			JMessagePlugin.register(username, password, function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//登录
		this.login = function(username, password) {
			var deferred = $q.defer();

			JMessagePlugin.login(username, password, function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//退出登录
		this.logout = function() {
			var deferred = $q.defer();

			JMessagePlugin.logout(function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//获取当前用户信息
		this.getUserInfo = function() {
			var deferred = $q.defer();

			JMessagePlugin.getUserInfo(function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//设置用户信息
		this.setUserGender = function(gender) {
			var deferred = $q.defer();

			JMessagePlugin.setUserGender(gender,function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//设置用户昵称
		this.setUserNickname = function(nickName) {
			var deferred = $q.defer();

			JMessagePlugin.setUserNickname(nickName,function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//获取会话列表
		this.getSingleConversationList = function() {
			var deferred = $q.defer();

			JMessagePlugin.getSingleConversationList(function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//删除与用户的会话
		this.deleteSingleConversation = function(username) {
			var deferred = $q.defer();

			JMessagePlugin.deleteSingleConversation(username,function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		//获取历史消息记录
		this.getSingleHistoryMessage = function(username, from, limit) {
			var deferred = $q.defer();

			JMessagePlugin.getSingleHistoryMessage(username, from, limit,function(response) {
				deferred.resolve(response);
			}, function(response) {
				deferred.reject(response);
			});
			
			return deferred.promise;
		}
		
		
	});