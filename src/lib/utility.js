'use strict';

angular.module('utilityService', [])
.factory('utility', ['$http',function($http) {
  var obj = {};
  obj.getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return obj;
}]);
