(function () {
    'use strict';

    angular.module('app')
        .controller('Test', ["$scope", Test]);

    function Test($scope) {

        // if you do vm=this then in your jasmine file use the controller as scope
        var vm = this;
        $scope.expenseItems = [];
        function activate() {
            return $scope.expenseItems = [
                { title: 'Taxi', description: 'To airport', amount: 89.95 },
                { title: 'Lunch', description: 'At airport', amount: 15.40 },
                { title: 'Coffee', description: 'Starbucks', amount: 4.93 }
            ];
        }

        $scope.activate = activate();
        

        activate();

        
    }

})();