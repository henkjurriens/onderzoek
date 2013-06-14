angular.module("app").factory('QuestionService', function() {
	var index = 0;
	var maxQuestions = 3;
	var questions = [ {vraag : "dit is een vraag", type : "open", answer : "a"}, { vraag: "dit is een tweede vraag", type : "open", answer : "b"},  { vraag: "dit is een derde vraag"} ];
	var answer = ""; 

  
	return {
		getType : function() {
			return questions[index].type;
		}, 

		getAnswer : function() {
			return questions[index].answer;
		},
		
		setAnswer : function(answer) {
			questions[index].answer = answer;
		},

		getQuestion : function() {
			return questions[index].vraag;
		},
		next : function() {
			if (index < maxQuestions) {	
				index++;
			}	
			return questions[index].vraag;
		},
		previous : function() {
			if (index > 0 ) {
				index--;
			}	
			return questions[index].vraag;
		}, 
		getType : function () {
    		type = questions[index].type;
    		return  "angular/" + type + '.html';	
    	}	
  	};
});	


