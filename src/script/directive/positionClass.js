/**
 * Created by zs on 2017/6/11.
 */
"use strict"

app.directive('appPositionClass', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/positionClass.html'
  }
}])