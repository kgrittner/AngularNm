"use strict";



describe('LoginController', function () {

    var loginController,
        $resource,
        appSettings,
        $httpBackend,
        currentUser,
        $scope,
        $rootScope;;




    describe('Registration', function () {


        beforeEach(function () {

            module("app");

            inject(function ($injector) {
                currentUser = $injector.get('currentUser');
                $rootScope = $injector.get('$rootScope');
                $scope = $rootScope.$new();
                loginController = $injector.get("$controller")("LoginController", {$scope: $scope});
            });

        });


        it('should register user', function () {

            $scope.user = {
                email: "karl221fgrittner@gmail.com",
                userName: this.email,
                password: "!am4Karl",
                confirmPassword: this.password
            };

            

            var result;

            $scope.registerUser();

            expect(currentUser.getProfile().isLoggedIn).toEqual(true);


        });
    });







});//End describe