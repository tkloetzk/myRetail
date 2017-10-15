(function () {
'use strict';

angular.module('myRetail')
    .service('ProductService', ['$http', function ($http) {
    	var images;
        this.get = function () {
        	return $http.get('js/components/product/item-data.json').then(getResponseData);
        }
        function getResponseData (response) {
            return response.data.CatalogEntryView[0];
        }
        this.setImages = function(setImages) {
        	images = setImages;
        }
        this.getImages = function() {
        	return images;
        }

    }]);

})();
