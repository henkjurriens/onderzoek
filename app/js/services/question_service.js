angular.module("app").factory('QuestionService', function() {
	var index = 0;
	var maxQuestions = 3;
	var intro   = { tekst : "dit is een intro"};
	var closing = { tekst : "dit is het einde"};

	var questions = [ {vraag : "dit is een vraag", type : "open", answer : "a"}, 
					  { vraag: "dit is een tweede vraag", type : "check", options : "a|b|c|d", answer : "a|d"},  
					  { vraag: "dit is een derde vraag"} ];
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
			return index == maxQuestions ? "-1" : questions[index].vraag;
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
    	},
    	getOptions : function() {
    		var json = [];
    		var options = questions[index].options.split("|");
    		var answer = questions[index].answer;
    		for (var i = 0; i < options.length; i++) {
			    var item = {
			        "value": options[i],
			        "label": i,
			        "checked": answer.indexOf(options[i]) !== -1
			    };
    			json.push(item);
			}
    		return json;
    	},	
    	setOptions : function(options) {
    		var answer = [];
    		for (var i = 0; i < options.length; i++) {
			 	if (options[i].checked) {
    				answer.push(options[i].value);
    			}
			}
			questions[index].answer =  answer.join("|");

    	},
    	getIntro : function() {
    		return intro;	
    	},
		getClosing : function() {
    		return closing;	
    	}

  	};
});	


