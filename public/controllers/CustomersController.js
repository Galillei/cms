angular.module('app')
    .controller('CustomersController', ['$scope','data',function ($scope, data){
    data.getCustomers().success(parseCustomers);
    function parseCustomers(datas){
        $scope.customers = datas;
    }

    $scope.newCustomer = {name: '', email: ''};
    $scope.addCustomer = function addCustomer() {
        var names = $scope.newCustomer.name.split(' ');
        data.addCustomer({
            first_name: names[0],
            last_name: names[1],
            email: $scope.newCustomer.email
        })
            .success(customerAddSuccess)
            .error(customerAddError);
    }
    $scope.removeCustomer = function (id) {
        alert('asdf');
        if (confirm('Do you really want to remove this customer?')) {
            data.removeCustomer(id).success(customerRemoveSuccess);
        }
    }
    function customerAddSuccess(datas) {
        $scope.error = null;
        $scope.customers.push(datas);
        $scope.newCustomer = { name: '', email: '' };
    }
    function customerAddError(datas) {
        $scope.error = datas;
    }
    $scope.removeCustomer = function (id) {
        alert('asdf');
        if (confirm('Do you really want to remove this customer?')) {
            data.removeCustomer(id).success(customerRemoveSuccess);
        }
    }


    function customerRemoveSuccess(datas) {
        var i = $scope.customers.length;
        while (i--) {
            if ($scope.customers[i].id == datas) {
                $scope.customers.splice(i, 1);
            }
        }
    }

}]);
