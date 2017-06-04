/**
 * Created by zs on 2017/6/4.
 */

"use strict"

app.directive('appHead', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/head.html'
  }
}])