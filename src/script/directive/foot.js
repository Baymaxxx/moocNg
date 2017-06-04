/**
 * Created by zs on 2017/6/4.
 */
"use strict"

app.directive('appFoot', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/foot.html'
  }
}])