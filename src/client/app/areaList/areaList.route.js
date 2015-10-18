(function() {
    'use strict';

    angular
        .module('app.areaList')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'areaList',
                config: {
                    url: '/areaList',
                    templateUrl: 'app/areaList/areaList.html',
                    controller: 'AreaListController',
                    controllerAs: 'vm',
                    title: 'List of Areas',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> List of Areas'
                    }
                }
            }
        ];
    }
})();
