/**
 * Created by zs on 2017/6/4.
 */
"use strict"

app.directive('appPositionList', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/position-list.html',
    $scope:{
      data:'='
    }
  }
}])