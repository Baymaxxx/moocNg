/**
 * Created by zs on 2017/6/4.
 */
"use strict"

app.controller('mainCtrl',['$scope',function ($scope) {
  $scope.list = [{
    id:'1',
    imgSrc:'//img.hb.aicdn.com/51c2ccc1f2f88d46dc92c9bf2884fdc6b22fa3cc61a5b-r2yMO6_fw100',
    name:'销售',
    companyName: '百度',
    city:'上海',
    industry:'互联网',
    time:'2014-01-23 05:10'
  },{
    id:'2',
    imgSrc:'//img.hb.aicdn.com/8588ef8e93f5f31ab0509ff5171410a8d2eb55032669c-vk2wn2_fw658"',
    name:'前端开发工程师',
    companyName: '婚聚网',
    city:'南京',
    industry:'互联网',
    time:'2016-01-23 01:10'
  }];
}])