(function(){
    'use strict';
    angular.module('app')
        .controller('CalculatorController', CalculatorController);
    CalculatorController.$inject = ['$scope'];
    function CalculatorController(){
        var vm = this;
        vm.method = 2;
        vm.actions = {
            2:'+',
            3:'*',
            4:'-'
        }
        vm.randomExpession = randomExpession;
        vm.expession= vm.randomExpession();
        vm.resetExpession = resetExpession;


        function randomExpession()
        {
            var method = vm.actions[vm.method];
            var firstNumber = Math.floor((Math.random() * 10) + 1);
            var secondNumber = Math.floor((Math.random() * 10) + 1);
            return firstNumber+method+secondNumber;
        }

        function resetExpession(){
            vm.expession = vm.randomExpession();
        }




    }
})();
