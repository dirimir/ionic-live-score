angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
])

.filter('scanDate', function () {
  return function (input) {
    var m = moment(input);
    m.utcOffset(600);
    return m.format("Do YYYY, h:mm:ss a");
  };
})

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.cricket', {
    url: '/cricket',
    views: {
      'tab-cricket': {
        templateUrl: 'templates/tab-cricket.html',
        controller: 'CricketCtrl'
      }
    }
  })

  .state('tab.football', {
    url: '/football',
    views: {
      'tab-football': {
        templateUrl: 'templates/tab-football.html',
        controller: 'FootballCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/cricket');

});