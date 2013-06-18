angular.module("app").config(function($routeProvider) {

  $routeProvider.when('/intro', {
    templateUrl: 'angular/intro.html',
    controller: 'IntroController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'angular/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/closing', {
    templateUrl: 'angular/closing.html',
    controller: 'ClosingController'
  });


  $routeProvider.when('/rest/onderzoek/1', {
    templateUrl: 'angular/rest/onderzoek.html',
  });


  $routeProvider.otherwise({ redirectTo: '/intro' });

});
