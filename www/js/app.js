angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $location, $state, $ionicModal,$ionicLoading, $timeout, jmessage) {
	$ionicPlatform.ready(function() {


		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

			JMessagePlugin.init();
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}




		$rootScope.user = {
			isLogin: false
		};

		$rootScope.hasLogin = function() {
			return this.user.isLogin;
		}

		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/login.html', {
			scope: $rootScope
		}).then(function(modal) {
			$rootScope.userModal = modal;
		});
		
		$ionicModal.fromTemplateUrl('templates/register.html', {
			scope: $rootScope
		}).then(function(modal) {
			$rootScope.userRegisterModal = modal;
		});
		
		$rootScope.showRegister=function(toState){
			$rootScope.userRegisterModal.show();
			$rootScope.user.toState = toState;
		}
		
		$rootScope.closeRegister=function(){
			$rootScope.userRegisterModal.hide();
		}

		// Triggered in the login modal to close it
		$rootScope.closeLogin = function() {
			$rootScope.userModal.hide();
		};

		// Open the login modal
		$rootScope.showLogin = function(toState) {
			$rootScope.userModal.show();
			$rootScope.user.toState = toState;
		};


        $rootScope.doRegister=function(){
        	var username = $rootScope.user.username;
			var password = $rootScope.user.password;

			$ionicLoading.show({
				template: '<ion-spinner icon="ios"></ion-spinner>'
			});

			jmessage.register(username, password).then(function(response) {
				$rootScope.user.isLogin = true;
				$rootScope.user.data = response;

				$rootScope.closeRegister();
				$timeout(function() {
					if ($rootScope.user.toState) {
						$state.go($rootScope.user.toState, {}, {
							reload: true
						});
					} else {
						$state.go("home", {}, {
							reload: true
						});
					}
				}, 500);

			});
        }
		// Perform the login action when the user submits the login form
		$rootScope.doLogin = function() {
			///console.log('Doing login', $rootScope.loginData);

			var username = $rootScope.user.username;
			var password = $rootScope.user.password;

			$ionicLoading.show({
				template: '<ion-spinner icon="ios"></ion-spinner>'
			});

			jmessage.login(username, password).then(function(response) {
				
				$ionicLoading.hide();
				$rootScope.user.isLogin = true;
				$rootScope.user.data = response;
				console.log(response);

				$rootScope.closeLogin();
				$timeout(function() {
					if ($rootScope.user.toState) {
						$state.go($rootScope.user.toState, {}, {
							reload: true
						});
					} else {
						$state.go("usercenter", {}, {
							reload: true
						});
					}
				}, 500);

			});


		};

		$rootScope.doLogout = function() {
			jmessage.logout().then(function(){
				$state.go("home", {}, {
					reload: true
				});
			});
		}



		//监听路由事件 
		$rootScope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams) {


			});


	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'home'
	})

	.state('usercenter', {
		url: '/usercenter',
		templateUrl: 'templates/user-center.html',
		controller: 'usercenter'
	})

	.state('chat', {
		url: '/chat',
		templateUrl: 'templates/chat.html',
		controller: 'chat'
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home');
});