angular.module('app')
.factory('data',function data($http){

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
