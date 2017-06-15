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
        vm.SubTotalAmount = 0;
        vm.VatAmount = 0;
        vm.Parsevalue = parsevalue;
        vm.SubTotal = subTotal;
        vm.CalculateCost = calculateCost;
        vm.TotalAmount = (vm.SubTotalAmount + vm.VatAmount);

        vm.ProductItems = [
            {item:'Cotton T-Shirt, Medium', price:'1.99', quantity: 1, cost:1.99},
            {item:'Baseball Cap, One Size', price:'2.99', quantity: 2, cost:5.98},
            {item:'Baseball Cap, One Size', price:'3.99', quantity: 3, cost:11.97}
        ];


        function removeItem(x) {
           
            vm.ProductItems.splice(x, 1);
            subTotal();
        }

        function calculateCost(index)
        {
            var quantity = vm.ProductItems[index].quantity;
            var price = vm.ProductItems[index].price;
            vm.ProductItems[index].cost = parseFloat((quantity * parseFloat(price)).toFixed(2));
            subTotal();

        }

        function subTotal() {
            vm.SubTotalAmount = 0;
            vm.ProductItems.forEach(function (item) {
                vm.SubTotalAmount += parseFloat(item.cost);
            });
            vm.SubTotalAmount = parseFloat(vm.SubTotalAmount.toFixed(2));
            vm.VatAmount = parseFloat((vm.SubTotalAmount * 20) / 100).toFixed(2);
            vm.TotalAmount = (parseFloat(vm.SubTotalAmount) + parseFloat(vm.VatAmount)).toFixed(2);
        }

        function parsevalue(price, quantity) {
            return parseFloat(price * quantity).toFixed(2);

        }
        vm.SubTotal();

    }
})();