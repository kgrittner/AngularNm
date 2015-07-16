"use strict";



describe('userAccount', function () {

    var userAccount, $resource, appSettings, $httpBackend;

    


    describe('Registration', function() {
        

        beforeEach(function () {

            module("common.services");

            inject(function ($injector) {
                appSettings = $injector.get("appSettings");
                $resource = $injector.get("$resource");
                $httpBackend = $injector.get('$httpBackend');
                userAccount = $injector.get("userAccount");
            });

        });


        it('should register user', function () {

            var user = {
                email: "karl221fgrittner@gmail.com",
                userName: this.email,
                password: "!am4Karl",
                confirmPassword: this.password
            };

            var result;

            userAccount.registration.registerUser(user,
                // Success
                function(data) {
                    result = true;
                },
                // Error
                function (response) {
                    result = false;
                    if (response.data.exceptionMessage)
                        console.log(data.exceptionMessage);

                    // Validation errors
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            console.log(response.data.modelState[key] + "\r\n");
                        }
                    }
                }

            );//End userAccount

            expect(result).toEqual(true);


        });
    });


    //describe('Login', function () {

    //    it('should login user', function () {

    //        var user = {
    //            email: "karlgrittner@gmail.com",
    //            userName: this.email,
    //            password: "!am4Karl",
    //            confirmPassword: this.password
    //        };

            
    //    });
       
    //});
    


    


    


});//End describe