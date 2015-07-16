"use strict";


angular
    .module("app")
    .controller("LoginController",

            ["$scope", "currentUser", "$location", "userAccount",

    function ($scope,   currentUser,   $location,   userAccount) {

        $scope.message = "";

        $scope.user = {
            userName: "",
            email: "email@gmail.com",
            password: "4Ema!lIs",
            confirmPassword: ""
        };


        $scope.login = function () {
            $scope.user.grant_type = "password";
            $scope.user.userName = $scope.user.email;
            $scope.user.confirmPassword = $scope.user.password;


            userAccount.login.loginUser($scope.user,
                // Success
                function(data) {
                    $scope.message = "";
                    $scope.user.password = "";
                    currentUser.setProfile(
                        $scope.user.userName,
                        $scope.user.email,
                        data.access_token
                    );
                    $location.path("app/products");
                },

                // Error
                function(response) {
                    $scope.user.password = "";
                    $scope.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage) {
                        $scope.message += response.data.exceptionMessage;
                    }

                    if (response.data.error) {
                        $scope.message += response.data.error;
                    }

                    currentUser.logout();
                }

            );//End userAccount
        };//End login


        $scope.registerUser = function() {

            $scope.user.confirmPassword = $scope.user.password;

            userAccount.registration.registerUser($scope.user,
                // Success
                function(data) {
                    $scope.user.confirmPassword = "";
                    $scope.registrationSuccessMessage = "... Registration Successful";
                    $scope.login();
                },
                // Error
                function (response) {
                    $scope.isLoggedIn = false;
                    $scope.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage)
                        $scope.message += response.data.exceptionMessage;

                    // Validation errors
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            $scope.message += response.data.modelState[key] + "\r\n";
                        }
                    }
                }

            );//End userAccount
        };//End registerUser




















    }//End Func
]);