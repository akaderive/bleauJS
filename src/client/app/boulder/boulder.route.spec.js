/* jshint -W117, -W030 */
describe('boulder routes', function () {
    describe('state', function () {
        var view = 'app/boulder/boulder.html';

        beforeEach(function() {
            module('app.boulder', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state boulder to url /boulder/ ', function() {
            expect($state.href('boulder', {})).to.equal('/boulder/');
        });

        it('should map /boulder route to boulder View template', function () {
            expect($state.get('boulder').templateUrl).to.equal(view);
        });

        it('of boulder should work with $state.go', function () {
            $state.go('boulder');
            $rootScope.$apply();
            expect($state.is('boulder'));
        });
    });
});
