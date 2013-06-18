angular.module('app')
.factory('OnderzoekService', function($resource) {
  return $resource('http://www.ihenk.com/onderzoek', {}, {
        update: {method:'PUT'}
    });
});
