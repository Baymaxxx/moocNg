/**
 * Created by zs on 2017/6/11.
 */

app.directive('appPositionInfo', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/position-info.html',
    scope:{
      isActive:'=',
      isLogin:'=',
      pos:'='
    },
    link: function ($scope) {
      $scope.imagePath = $scope.isActive?'image/star-active.png':'image/star.png';
    }
  }
}])