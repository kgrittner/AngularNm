(function () {
    "use strict";


    angular
        .module("app")
        .controller("MainController",

                ["$scope", "appSettings", "currentUser", 

        function ($scope, appSettings, currentUser) {
            var mc = this;


            

            mc.profile = {};
            mc.isLoggedIn = function () {
                mc.profile = currentUser.getProfile();
                return currentUser.getProfile().isLoggedIn;
            };

            mc.logout = function() {
                currentUser.logout();
                mc.profile = {};
                console.log("Logged Out");
            };


        }]);


}());