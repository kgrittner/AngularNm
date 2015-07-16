/// <reference path="common/common.services.js" />



angular
    .module("app")
    .constant("JQ_CONFIG", {
        cookies: "../Scripts/angular-cookies.js"
    })
    .config([
        "$ocLazyLoadProvider", function($ocLazyLoadProvider) {

            $ocLazyLoadProvider.config({
                debug: true,
                events: true,
                modules: [
                    {
                        name: 'common.services',
                        files: [
                            'app/common/currentUser.js',
                            'app/common/userAccount.js',
                            'app/common/productResource.js'
                        ]
                    }
                ]
            });

        }
    ]);