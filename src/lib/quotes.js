'use strict';

angular.module('quotesService', [])
.factory('quotes', ['$http', 'utility', function($http, utility) {
  var obj = {};
  obj.getRndQuote = function(callback){
    $http.get('src/data/quotes.json')
    .success(function(data, status, headers, config){
      var quoteId = utility.getRandom(0, data.length);
      callback(null, data[quoteId]);
    })
  }
  return obj;
}]);
