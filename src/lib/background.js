'use strict';

angular.module('backgroundService', [])
.factory('background', ['$http', 'utility', function($http, utility) {
  var obj = {};
  $http.defaults.useXDomain = true;
  obj.getRnd = function(callback){
    $http.get('src/data/backgrounds.json')
    .success(function(data, status, headers, config){
      var bgId = utility.getRandom(0, data.length);
      callback(null, data[bgId]);
    })
  }
  return obj;
}]);
