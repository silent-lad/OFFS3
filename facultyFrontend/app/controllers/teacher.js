faculty.controller("tCtrl", function($scope, $rootScope, $location, teacherService) {


	$scope.checkStatus = function() {
		$location.path("/teacherAnalysis");
	}

	$scope.logout = function() {
		$location.path('/')
	}

})
