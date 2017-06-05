(function () {
    'use strict';

    app.controller('productController', ['productService', productController]);

    function productController(productService) {
        var model = this;
        model.dummyText = 'and the value from the controller of the Angular controller';

        model.getAllProducts = getAllProducts;

        model.product = {
            ProductId: undefined,
            Description: undefined,
            Rate: undefined,
            UnitOfMeasures: undefined
        };
    }

});