/**
 * Created by zs on 2017/6/5.
 */
"use strict"

app.controller('positionCtrl',['$http','$state','$scope',function ($http,$state,$scope) {
  $http.get('/data/position.json?id=' + $state.params.id).success(function (res) {
    $scope.position = res;
    console.log($scope.position.name)
  })
}])