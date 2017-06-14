/**
 * Created by zs on 2017/6/11.
 */

app.directive('appCompany', [function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/company.html',
  }
}])