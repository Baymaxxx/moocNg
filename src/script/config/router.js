/**
 * Created by zs on 2017/6/1.
 */
'use strict'

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  })
  $urlRouterProvider.otherwise('main')
}])