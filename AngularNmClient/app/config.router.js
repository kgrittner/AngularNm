
"use strict";

angular
.module("app")

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(
[        '$stateProvider', '$urlRouterProvider',
function ($stateProvider,   $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/app/login');

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'tpl/app.html'
        })
        .state('app.login', {
            url: '/login',
            templateUrl: 'app/login/loginView.html',
            controller: "LoginController",
            data: { pageTitle: 'Login' },
            resolve: {
                deps: ['$ocLazyLoad',
                  function ($ocLazyLoad) {
                      return $ocLazyLoad.load('common.services').then(
                          function () {
                              return $ocLazyLoad.load(['app/login/loginController.js']);
                          }
                      );
                  }
                ]
            }
        })
        .state('app.products', {
            url: '/products',
           
            templateUrl: 'app/products/productsView.html',
            controller: "ProductsController",
            data: { pageTitle: 'Products' },
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['app/products/productsController.js']);
                }]
            }
        })
        .state('app.productsEdit', {
            url: '/productsEdit',
            templateUrl: 'app/products/productEditView.html',
            controller: "ProductEditCtrl as vm",
            data: { pageTitle: 'Products Edit' },
            resolve: {
                deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('app/products/productEditCtrl.js');
                        }]
            }
        })
        .state('app.productsList', {
            url: '/productsList',
            templateUrl: 'app/products/productListView.html',
            controller: "ProductListCtrl as vm",
            data: { pageTitle: 'Products List' },
            resolve: {
                deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('app/products/productListCtrl.js');
                        }]
            }
        })




    ;


}
]



);


