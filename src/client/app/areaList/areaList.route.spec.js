/* jshint -W117, -W030 */
describe('areaList routes', function () {
    describe('state', function () {
        var view = 'app/areaList/areaList.html';

        beforeEach(function() {
            module('app.areaList', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state areaList to url /areaList ', function() {
            expect($state.href('areaList', {})).to.equal('/areaList');
        });

        it('should map /areaList route to areaList View template', function () {
            expect($state.get('areaList').templateUrl).to.equal(view);
        });

        it('of areaList should work with $state.go', function () {
            $state.go('areaList');
            $rootScope.$apply();
            expect($state.is('areaList'));
        });
    });
});
