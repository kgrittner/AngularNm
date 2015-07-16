(function() {
    "use strict";
    angular
        .module("app")
        .controller("ProductListCtrl",
        [
            "productResource",
            ProductListCtrl
        ]);

    function ProductListCtrl(productResource) {
        var vm = this;
        vm.message = '';
        vm.params = {
            $orderby: "Price desc"
        }
    

    productResource.query(vm.params,
        function(data) {
            vm.products = data;
        },
        function (response) {
            vm.message = response.statusText + "\r\n";
            if (response.data.exceptionMessage)
                vm.message += response.data.exceptionMessage;
        }
    );

    // Alternative code using variables instead of hard-coded values
    //vm.searchCriteria = "GDN";
    //vm.sortProperty = "Price";
    //vm.sortDirection = "desc";

    //productResource.query({
    //    $filter: "contains(ProductCode, '" + vm.searchCriteria + "')" +
    //        " or contains(ProductName, '" + vm.searchCriteria + "')",
    //    $orderby: vm.sortProperty + " " + vm.sortDirection
    //}, function (data) {
    //    vm.products = data;
    //})

}
}());
