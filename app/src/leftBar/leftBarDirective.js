/**
 * Created by 441N143G on 19.01.16.
 */
'use strict';

angular

    .module('foodApp')

    .directive('leftBar', [function () {
        return {
            templateUrl: '/src/leftBar/leftBar.html',
            scope: {},
            controller: 'leftBarController',
            controllerAs: 'vm'
        }
    }])

    .controller('leftBarController', [function () {

        var vm = this;

        vm.isOpen = false;

    }]);