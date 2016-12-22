(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.diet ='';
  $scope.mes=''
  $scope.checkDiet = function () {
    if ($scope.diet=='')
    {$scope.mes='Please enter data first'}
    else
    {
      var diet=String($scope.diet).replace(/(^[,\s]+)|([,\s]+$)/g, '')
      if (String(diet).split(',').length<4){
        $scope.mes='Enjoy!'
      }
      else {
        $scope.mes='Too much!'
      }
    }
  };

  $scope.clearMes=function () {
    $scope.mes=''
  }



}


})();
