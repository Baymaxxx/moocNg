/**
 * Created by zs on 2017/6/4.
 */
"use strict"

app.controller('mainCtrl',['$http','$scope',function ($http,$scope) {
  $http.get('/data/positionList.json').success(function (data) {
    $scope.list = data;
  }).error(function (err) {
    console.log(err);
  })
}])