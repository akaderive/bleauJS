(function () {
    'use strict';

    angular
        .module('app.areaList', ['ngStorage'])
        //.module('app.areaList')
        .controller('AreaListController', AreaListController);

    AreaListController.$inject = ['$q', 'logger', '$sessionStorage', '$scope', 'dataservice'];
    /* @ngInject */
    function AreaListController($q, logger, $sessionStorage, $scope, dataservice) {
        var vm = this;
        vm.title = 'List of Areas';
        vm.areas = [];
        vm.showAreas = [];
        vm.clickArea = clickArea;

        /*Return    2 if there is no search for a boulder
                    0 if there is no boulder in the area
                    1 if at least a boulder is in the area AND there is a search for a boulder
                    */
        vm.getBtnState = function(boulders) {
            if ($scope.searchBoulders !== undefined && $scope.searchBoulders !== '') {
                if (boulders === 0) {
                    return 0;
                }
                return 1;
            }
            return 2;
        };

        //Store the search values when leaving the view
        $scope.$on('$destroy', saveSearchs);
        function saveSearchs() {
            $sessionStorage.searchAreas = $scope.searchAreas;
            $sessionStorage.searchBoulders = $scope.searchBoulders;
        }

        $scope.searchAreas = $sessionStorage.searchAreas;
        $scope.searchBoulders = $sessionStorage.searchBoulders;

        activate();

        function activate() {
            var promises = [getAreas()];
            return $q.all(promises).then(function() {
                logger.info('Activated AreaList View');
            });
        }

        function getAreas() {
            return dataservice.getAreas().then(function (data) {
                console.log(data);
                vm.areas = data;
                var i;
                for (i = 0; i < data.length; i++) {
                    vm.showAreas[i] = false;
                }
                return vm.areas;
            });
        }

        function clickArea(index) {
            vm.showAreas[index] = !vm.showAreas[index];
            return vm.showAreas[index];
        }
    }
})();
