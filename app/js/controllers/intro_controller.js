angular.module("app").controller('IntroController', function($scope, $location, QuestionService) {
	$scope.intro = QuestionService.getIntro();

	$scope.start =  function() {
		$location.path('/home');
	}

  
});
