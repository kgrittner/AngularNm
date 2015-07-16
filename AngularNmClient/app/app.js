(function() {
    "use strict";

    // Here we define all of the plugins / classes we wish to use
    // throughout the entire application

    angular
        .module("app",
        [
            "ngResource",
            "ngCookies",
            "ui.router",
            'oc.lazyLoad',
            "common.services",

        ]);


}());