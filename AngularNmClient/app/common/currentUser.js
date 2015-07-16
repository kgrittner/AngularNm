(function () {
    "use strict";

    // Here we define all of the plugins / classes we wish to use throughout the entire application

    angular
        .module("common.services")
        .factory("currentUser", [currentUser]);


    function currentUser() {

        var profile = {
            userName: "",
            email: "",
            token: "",
            isLoggedIn: false
        };


        var getProfile = function() {
            return profile;
        };

        var setProfile = function (userName, email, token) {
            profile.userName = userName;
            profile.email = email;
            profile.token = token;
            profile.isLoggedIn = true;
        };

        var logout = function() {
            profile.userName = "";
            profile.email = "";
            profile.token = "";
            profile.isLoggedIn = false;
        };

        return {
            getProfile: getProfile,
            setProfile: setProfile,
            logout: logout
        };


    }


}());