(function () {
      angular
            .module("basketApp")
            .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
                  $stateProvider.state("home", {
                        url: "/home",
                        templateUrl: "/app/Views/Products.html",
                        controller: "productController as product"

                  });

                  $urlRouterProvider.otherwise("home");

            }])

})();