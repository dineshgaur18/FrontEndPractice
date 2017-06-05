(function () {
    'use strict';
    //var app = angular.module('billingApp', []);


    function CoreController() {
        var model = this;

        model.hello = "Hello Angular";
    };


    app.controller('coreController', CoreController);
})();