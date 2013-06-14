angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService, QuestionService) {
  $scope.title = "Home";
  $scope.vraag = QuestionService.getQuestion();
  $scope.answer = { answer : QuestionService.getAnswer() };

  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };

  $scope.next = function() {
    QuestionService.setAnswer($scope.answer.answer);
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

  $scope.getPartial = function () {
          return 'angular/open.html';
  };

  });


