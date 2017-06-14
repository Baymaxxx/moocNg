/**
 * Created by zs on 2017/6/8.
 */
"use strict"

app.directive('appHeadBar', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/headBar.html',
    scope: {
      text: "@"
    },
    link:function ($scope) {
      $scope.back = function () {
        window.history.back()
      }
    }
  }
}])