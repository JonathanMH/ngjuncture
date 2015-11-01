'use strict';

// Declare app level module which depends on views, and components
angular.module('ngJuncture', [
'ngRoute',
'ngJuncture.home',
'utilityService',
'settingsService',
'greetingsService',
'backgroundService',
'quotesService',
'axf4',
]).



config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $routeProvider.otherwise({redirectTo: '/'});
}]);
