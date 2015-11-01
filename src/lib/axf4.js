'use strict';

/* This file is for easter eggs and sweet things only. */

angular.module('axf4', [])
.factory('sw', function() {
  var obj = {};
  obj.trp = function(greeting){
    if(localStorage.user){
      var user = JSON.parse(localStorage.user);

      /* Good morning, Good evening, etc */
      if(user.name === 'Judith' || user.name === 'Halefa'){
        greeting = greeting.replace('Good', 'Lovely');
      }
      if(user.name === 'marvin'){
        greeting = greeting.replace('Good', 'Geeky');
      }
    }
    return greeting;
  }
  return obj;
});
