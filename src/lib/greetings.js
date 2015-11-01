'use strict';

angular.module('greetingsService', [])
.factory('greeter', ['sw', function(sw) {
  var greeter = {};
  greeter.greet = function(hour){
    var greeting = '';
    var now = new Date();
    if (now.getHours() > 4 && now.getHours() < 12){
      greeting = 'Good morning';
    }
    else if (now.getHours() >= 12 && now.getHours() < 13){
      greeting = 'Good day';
    }
    else if (now.getHours() >= 13 && now.getHours() < 18){
      greeting = 'Good afternoon';
    }
    else if (now.getHours() >= 18 && now.getHours() <= 23){
      greeting = 'Good evening';
    }
    else {
      greeting = 'Well, aren\'t you a night owl';
    }
    greeting = sw.trp(greeting);

    return greeting;
  }
  return greeter;
}]);
