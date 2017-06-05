
(function () {
    'use strict';

    angular.module('billingApp').factory('productService', productService);

    productService.$inject = ['$http', '$q', 'Constants'];

    function productService($http, $q, Constants) {
        var serviceBase = Contants.apiServiceBaseUri;
        var productServiceFactory = {};

        var _getAllProducts = function () {
            var deferred = $q.defer();

            $http.get(serviceBase + '/api/Product')
            .success(function (data) {

            })
            .error(function () {

            });
        }

    }

});