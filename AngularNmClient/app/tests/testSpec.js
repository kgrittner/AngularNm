"use strict";

describe('currentUser', function() {

    var factory;

    beforeEach(function() {

        module("common.services");

        inject(function($injector) {
            factory = $injector.get("currentUser");
        });

    });

    


    it('should return blank profile', function () {

        var profile = factory.getProfile();

        expect(profile.userName).toEqual("");
        expect(profile.email).toEqual("");
        expect(profile.token).toEqual("");
        expect(profile.isLoggedIn).toEqual(false);
    });


    it('should set profile', function () {

        var userName = "Karl";
        var email = "karl@gmail.com";
        var token = "777";

        factory.setProfile(userName, email, token);
        var profile = factory.getProfile();

        expect(profile.userName).toEqual(userName);
        expect(profile.email).toEqual(email);
        expect(profile.token).toEqual(token);
        expect(profile.isLoggedIn).toEqual(true);
    });


    it('should logout and reset profile', function () {

        var userName = "Karl";
        var email = "karl@gmail.com";
        var token = "777";

        factory.setProfile(userName, email, token);
        var profile = factory.getProfile();
        factory.logout();

        expect(profile.userName).toEqual("");
        expect(profile.email).toEqual("");
        expect(profile.token).toEqual("");
        expect(profile.isLoggedIn).toEqual(false);
    });
    

});//End describe


















//describe('Test', function () {

//    var $controllerConstructor;
//    var scope;
//    var $controller;

//    beforeEach(module('app'));



//    //beforeEach(inject(function (_$controller_) {
//    //    // The injector unwraps the underscores (_) from around the parameter names when matching
//    //    $controller = _$controller_;
//    //}));


//    beforeEach(inject(function ($controller, $rootScope) {
//        $controllerConstructor = $controller;
//        scope = $rootScope.$new();
//    }));


//    describe('$scope.hello', function () {
//        it('sets the strength to sosdfsdfmesdfvdfar "strong" if the password length is >8 chars', function () {
//            //var $scope = {};
//            var ctrl = $controllerConstructor('Test', { $scope: scope });

//            expect(ctrl.expenseItems.length).toBe(3);


////$scope.password = 'longerthaneightchars';
//            //$scope.grade();
//            //expect($scope.strength).toEqual('strong');
//        });
//    });
//});
