(function() {
	angular.module('App',['ngRoute'])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/user/id', {
					templateUrl: '/user',
					controller: 'GetUserCtrl'
				})
				.when('/dashboard', {
					templateUrl: '/dashboard',
					controller: 'UserCtrl'
				})
				.otherwise({
					 redirectTo: '/'
				})
		})
		.controller('UserCtrl', function ($scope, $http) {
				$http.get('/user')
					.success(function(data) {
						$scope.users = data;	
					})
					.error(function(err) {
						console.log(err);
					})
		})
		.controller('GetUserCtrl', function ($scope) {
			
		})
})();
