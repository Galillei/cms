(function(){
    'use strict';
    angular.module('app')
        .controller('CalculatorController', CalculatorController);
    CalculatorController.$inject = ['$scope'];
    function CalculatorController(){
        var vm = this;
        vm.expession='12';
        vm.actions = {
            1:'/',
            2:'+',
            3:'*',
            4:'-'
        }
    }
})();
