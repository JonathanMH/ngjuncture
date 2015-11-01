'use strict';

angular.module('settingsService', [])
.factory('settings', function() {
  var obj = {};

  obj.isLoggedIn = function(){
    if(localStorage.user){
      return true;
    }
    else {
      return false;
    }
  };

  obj.getName = function(){
    if(localStorage.user){
      var user = JSON.parse(localStorage.user);
      return user.name;
    }
    else {
      return undefined;
    }
  };

  obj.setName = function(newName){
    if(localStorage.user){
      var user = JSON.parse(localStorage.user);
      user.name = newName;
    }
    else {
      var user = {name: newName};
    }
    localStorage.user = JSON.stringify(user);
  }

  obj.logOut = function(){
    delete(localStorage.user);
  }
  return obj;
});
