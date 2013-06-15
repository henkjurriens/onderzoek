angular.module("app").controller('HomeController', function($scope, $location, QuestionService) {
  $scope.title = "Home";
  $scope.vraag = QuestionService.getQuestion();
  $scope.answer = { answer : QuestionService.getAnswer() };
  $scope.options = {};

  $scope.id = $location.search().id;

  $scope.next = function() {
    QuestionService.setAnswer($scope.answer.answer);
    QuestionService.setOptions($scope.options);
   	this.vraag = QuestionService.next(); 
    this.answer.answer = QuestionService.getAnswer();
  };

  $scope.previous = function() {
  	$scope.vraag = QuestionService.previous();
	  $scope.answer.answer = QuestionService.getAnswer();
	};

  $scope.setAnswer = function(answer){
    QuestionService.setAnswer(answer);   
  };

  $scope.getAnswer = function() {
    QuestionService.getAnswer();
  };

  $scope.getType = function() {
    return QuestionService.getType();
  };

  $scope.getOptions = function() {
    $scope.options = QuestionService.getOptions();
    return $scope.options;
  };

  

});


