angular.module("app").directive("showAnswers", function($compile) {
  return {
    scope: true,
    link: function ( scope, element, attrs ) {
      var el;

      attrs.$observe( 'template', function ( tpl ) {
        if ( angular.isDefined( tpl ) ) {
          el = $compile( tpl )( scope );
          element.html("");
          element.append( el );
        }
      });

      scope.$watch('answer', function(value) {
            alert(value);
            scope.setAnswer(value); 
      });
    }
  };
});
