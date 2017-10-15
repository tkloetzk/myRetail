(function () {
'use strict';

angular.module('myRetail')
    .controller('ProductCtrl', ['product','ProductService', function(product, productService) {
        var ctrl = this;
        ctrl.isAvailableOnline = isAvailableOnline;
        ctrl.isAvailableInStore = isAvailableInStore;
        ctrl.product = product;

        ctrl.images = getImages();
        
        ctrl.primaryImage = ctrl.product.Images[0].PrimaryImage[0].image;
        
        function isAvailableOnline () {
            return product.purchasingChannelCode === '0' || product.purchasingChannelCode === '1';
        }

        function isAvailableInStore () {
            return product.purchasingChannelCode === '0' || product.purchasingChannelCode === '2';
        }

        function getImages () {
            var result = [];
            result.push(ctrl.product.Images[0].PrimaryImage[0].image);
            productService.setImages(ctrl.product.Images[0]);
            angular.forEach(ctrl.product.Images[0].AlternateImages, function (alternateImage) {
                result.push(alternateImage.image);
            });
            return result;
        }

    }]);

})();
