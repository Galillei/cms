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
        vm.addCustomer = function addCustomer() {
            var names = vm.newCustomer.name.split(' ');
            data.addCustomer({
                first_name: names[0],
                last_name: names[1],
                email: $scope.newCustomer.email
            })
                .success(customerAddSuccess)
                .error(customerAddError);
        }
        vm.removeCustomer = function (id) {
            if (confirm('Do you really want to remove this customer?')) {
                data.removeCustomer(id).success(customerRemoveSuccess);
            }
        }
        function customerAddSuccess(datas) {
            vm.error = null;
            vm.customers.push(datas);
            vm.newCustomer = {name: '', email: ''};
        }

        function customerAddError(datas) {
            vm.error = datas;
        }

        vm.removeCustomer = function (id) {
            if (confirm('Do you really want to remove this customer?')) {
                data.removeCustomer(id).success(customerRemoveSuccess);
            }
        }


        function customerRemoveSuccess(datas) {
            var i = vm.customers.length;
            while (i--) {
                if (vm.customers[i].id == datas) {
                    vm.customers.splice(i, 1);
                }
            }
        }

    }
})();