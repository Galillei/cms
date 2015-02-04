/**
 * Created by root on 1/30/15.
 */
angular.module('app',[ 'ngRoute' ])
.config(function configure($routeProvider){
    $routeProvider
        .when('/', { controller: 'CustomersController', templateUrl: './templates/customers.html' })
        .when('/customer/:id', { controller: 'CustomerController', templateUrl: './templates/customer.html' })
        .when('/calculator/', {controller:'CalculatarController', templateUrl:'./templates/calculator/calculate.html'})
        .otherwise({ redirect: '/' });
});
