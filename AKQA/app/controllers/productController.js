(function(){
 
 angular
    .module("basketApp")
    .controller("productController", productController);

    productController.$inject = ["Constants"];

    function productController(Constants)
    {
        var vm = this;
        vm.RemoveItem = removeItem;
        vm.CurrencySymbol = Constants.CurrencySymbol;
        vm.CalculateCost = calculateCost;

        vm.ProductItems = [
            {item:'Cotton T-Shirt, Medium', price:'1.99', quantity: 1, cost:'1.99'},
            {item:'Baseball Cap, One Size', price:'2.99', quantity: 2, cost:'5.99'},
            {item:'Baseball Cap, One Size', price:'3.99', quantity: 3, cost:'3.99'}
        ];


        function removeItem(x)
        {
                vm.ProductItems.splice(x, 1);
        }

        function calculateCost(price, quantity)
        {
                return price*quantity;

        }


    }
})();