/**
 * Created by askuznetsov on 12/23/2015.
 */
angular.module('foodApp')
  .controller('appController', ['$scope', function($scope) {
    ons.bootstrap();



//configs
$scope.configLeftBar = {

//this will be list with animates, u'll setUp what u whant in 'anime'
    anime: 'slide',
    style: {'width': '500px'}

};


  }]);
