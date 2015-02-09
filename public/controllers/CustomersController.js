(function() {
    'use strict';
    angular.module('app')
        .controller('CustomersController', ['$scope', 'data', CustomersController]);
    function CustomersController($scope, data) {
        data.getCustomers().success(parseCustomers);
        var vm = this;
        function parseCustomers(datas) {
            $scope.customers = datas;
        }

        vm.newCustomer = {name: '', email: ''};
        vm.addCustomer = addCustomer;
        function addCustomer() {
          var names = vm.newCustomer.name.split(' ');
          data.addCustomer({
                 first_name: names[0],
                 last_name: names[1],
                 email: vm.newCustomer.email
                })
                 .success(customerAddSuccess)
                 .error(customerAddError);
            }
        vm.removeCustomer = function (id) {
            if (confirm('Do you really want to remove this customer?')) {
                data.removeCustomer(id).success(customerRemoveSuccess);
            }
        };
        function customerAddSuccess(datas) {
            vm.error = null;
            $scope.customers.push(datas);
            vm.newCustomer = {name: '', email: ''};
        }

        function customerAddError(datas) {
            vm.error = datas;
        }
        function customerRemoveSuccess(datas) {
            var i = $scope.customers.length;
            while (i--) {
                if ($scope.customers[i].id == datas) {
                    $scope.customers.splice(i, 1);
                }
            }
        }

    }
})();