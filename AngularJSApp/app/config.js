



app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/Core/View/home.html',
            controller: 'homeController'
        })
        .state('product', {
            url: '/product',
            templateUrl: 'app/Product/View/product.html',
            controller: 'productController as prodCtrl'
        });

    $urlRouterProvider.otherwise('home');
}]);

