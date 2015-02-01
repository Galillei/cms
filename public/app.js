/**
 * Created by root on 1/30/15.
 */
var app = angular.module('app',[ 'ngRoute' ]);
app.config(function configure($routeProvider){
    $routeProvider
        .when('/', { controller: 'CustomersController', templateUrl: './templates/customers.html' })
        .when('/customer/:id', { controller: 'CustomerController', templateUrl: './templates/customer.html' })
        .otherwise({ redirect: '/' });
});

app.factory('data',function data($http){

    return {
        getCustomers:function getCustomers() { return $http.get('/customers/all');},
        getCustomer: function getCustomer(id){ return $http.get('/customers?id='+ id)},
        addCustomer: function addCustomer(data){ return $http.post('customers',data)},
        removeCustomer: function removeCustomer(id){ return $http.delete('/customers?id='+ id)},
        getTransactions: function getTransactions(id) { return $http.get('/transactions?id='+ id); },
        addTransaction: function addTransaction(data) { return $http.post('/transactions', data); },
        removeTransaction: function removeTransaction(id) { return $http.delete('/transactions?id='+ id); }
    }
});

app.controller('CustomersController', ['$scope','data',function ($scope, data){
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
