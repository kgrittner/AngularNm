(function () {
    "use strict";


    angular
        .module("common.services",
        [
            "ngResource",
            "ngCookies"
        ])

        .constant("appSettings",
        {
            serverPath: "http://localhost:53912",
            title: {
                index: "Home | title"
            }
        });


}());