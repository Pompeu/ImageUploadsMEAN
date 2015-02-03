(function() {
	angular.module('App',['ngRoute'])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/createUser',
					controller: 'UserCtrl'
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
			$scope.users = null;
			$scope.msg = null;
			$http.get('/user')
				.success(function(data) {
					$scope.users = data;	
				})
				.error(function(err) {
					$scope.msg = err;
				})

			$scope.delete = function(user , index) {
				$http.delete('/user/'+user.id)
					.success(function (resp) {
						$scope.msg = resp;
						$scope.users.splice(index, 1);
					})				
					.error(function (resp) {
						$scope.msg = resp;
					})
				
			}	
		})
})();
