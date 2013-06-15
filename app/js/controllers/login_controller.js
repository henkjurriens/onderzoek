angular.module("app").controller('LoginController', function($scope, $location, QuestionService) {
	$scope.intro = QuestionService.getIntro();

	$scope.start =  function() {
		$location.path('/home');
	}

  
});
