angular.module("app").controller('ClosingController', function($scope, $location, QuestionService) {
	$scope.closing = QuestionService.getClosing();
  
});
