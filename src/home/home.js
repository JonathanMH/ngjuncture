'use strict';

angular.module('ngJuncture.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'src/home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', '$route', '$interval', 'settings', 'greeter', 'quotes', 'background', function($scope, $route, $interval, settings, greeter, quotes, background) {
  $scope.refreshTime = function(){
    var now;
    var output = {};
    var backgroundUrl;
    now = new Date();

    if(now.getHours().toString().length == 1){
      output.hours = '0' + now.getHours();
    }
    else {
      output.hours = now.getHours();
    }
    if(now.getMinutes().toString().length == 1){
      output.minutes = '0' + now.getMinutes();
    }
    else {
      output.minutes = now.getMinutes();
    }
    $scope.time = output.hours + ':' + output.minutes;
  };

  $scope.refreshGreeting = function(){
    $scope.greeting = greeter.greet();
  }

  $scope.showSettings = function(){
    if($scope.settingsVisible === true){
      $scope.settingsVisible = false;
    }
    else {
      $scope.settingsVisible = true;
    }
  }

  $scope.getBg = function(){
    background.getRnd(function(err, bg){
      var bg = bg;
      $scope.backgroundUrl = bg.url;
    });
  }

  $scope.logOut = function(){
    settings.logOut();
    $route.reload();
  }

  $scope.updateName = function(){
    settings.setName($scope.name);
    $scope.name = settings.getName();
    $scope.askName = false;
    $route.reload();
  };

  if(settings.isLoggedIn()){
    quotes.getRndQuote(function(err, quote){
      $scope.showQuote = true;
      $scope.quote = quote;
    });
  }

  $scope.settingsVisible = false;
  $scope.greeting = greeter.greet();
  $interval($scope.refreshGreeting, 3600);

  $scope.getBg();
  $scope.refreshTime();
  $interval($scope.refreshTime, 500);

  $scope.name = settings.getName();

  if($scope.name === undefined){
    $scope.askName = true;
  }
  else {
    $scope.name = settings.getName();
    $scope.askName = false;
  }
}]);
