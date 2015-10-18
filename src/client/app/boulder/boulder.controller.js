(function () {
    'use strict';

    angular
        .module('app.boulder')
        .controller('BoulderController');

    BoulderController.$inject = ['$stateParams', 'logger'];
    /* @ngInject */
    function BoulderController($stateParams, logger, dataservice) {
        var vm = this;
        vm.title = 'Boulder';
        vm.boulderId = parseInt($stateParams.boulderId);

        vm.listOfBoulders = [
            {
                id: 1,
                name: 'Carnage',
                grade: '7B'
            },
            {
                id: 2,
                name: 'Aerodynamite',
                grade: '7B'
            },
            {
                id: 3,
                name: 'L\'hélicopter',
                grade: '7A'
            },
            {
                id: 4,
                name: 'TimTim',
                grade: '7A'
            },
            {
                id: 5,
                name: 'L\'Ange Naif',
                grade: '7C'
            },
            {
                id: 6,
                name: 'Le lot de boudins',
                grade: '7C'
            }
        ];

        for (var i = 0; i < vm.listOfBoulders.length; i++) {
            if (vm.listOfBoulders[i].id === vm.boulderId) {
                vm.boulder = vm.listOfBoulders[i];
                break;
            }
        }

        activate();

        function activate() {
            logger.info('Activated Boulder View');
        }
    }
})();
