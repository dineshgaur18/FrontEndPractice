
var basketApp = angular.module('basketApp', []);

basketApp.controller('itemsController', function($scope){

    $scope.basketItems = [
        {product:'Cotton T-Shirt, Medium', price:'£1.99', quantity: 1, cost:'£1.99'}, 
        {product:'Baseball Cap, One Size', price:'£2.99', quantity: 2, cost:'£5.99'},
        {product:'Baseball Cap, One Size', price:'£3.99', quantity: 3, cost:'£3.99'}
    ];
    $scope.removeItem = function(x){
        $scope.basketItems.splice(x, 1);
    }
})