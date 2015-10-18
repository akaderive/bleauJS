(function() {
    'use strict';

    angular
        .module('app.boulder')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'boulder',
                config: {
                    url: '/boulder/{boulderId:[0-9]{1,5}}',
                    templateUrl: 'app/boulder/boulder.html',
                    controller: 'BoulderController',
                    controllerAs: 'vm',
                    title: 'List of Areas' //Allow the current highlighted menu to be "list of areas" in the sidebar
                }
            }
        ];
    }
})();
