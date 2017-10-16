(function () {
'use strict';

angular.module('myRetail')
.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('productState', {
        controller: 'ProductCtrl as productCtrl',
        url: '/product',
        templateUrl: 'js/components/product/product.html',
        resolve: {
            product: ['ProductService', function (ProductService) {
                return ProductService.get();
            }]
        }
    });
}]);

})();
