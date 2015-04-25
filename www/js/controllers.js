angular.module('starter.controllers', [])

.controller('CricketCtrl', function ($rootScope, $scope, $http, $log, $interval) {

    window.JsonData = function (data) {
        $rootScope.data = data;
        $scope.loading = false;
    };

    window.getData = function () {
        $http.jsonp("http://www.starsports.com/syndicationdata/livematches/livematches.json?callback=JSON_CALLBACK");
    };

    $scope.init = function () {
        $scope.loading = true;
        window.getData();
        $interval(window.getData, 5000);
    };

    // init the router
    $scope.init();
})

.controller('FootballCtrl', function ($scope, Chats) {

});