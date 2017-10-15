(function () {
'use strict';

angular.module('myRetail')
    .directive('carousel', ['ProductService', function(productService){
    	return {
            restrict: 'E',
            templateUrl: 'js/components/global/carousel/carousel.html',
            bindToController: true,
            controllerAs: 'carousel',
            controller: [function () {
                var ctrl = this;
                var result = [];
                var images = productService.getImages();
                ctrl.images = getImages();
                ctrl.setPrimary = setPrimary(images.PrimaryImage[0].image);
                ctrl.goToNext = goToNext;
                ctrl.goToPrevious = goToPrevious;
                ctrl.isStart = isStart;
                ctrl.isEnd = isEnd;

                ctrl.visibleImages = getVisibleImages();

                function setPrimary (image) {
                    ctrl.primary = image;
                    ctrl.visibleImages = getVisibleImages();
                }
                
                function getImages () {
                    result.push(images.PrimaryImage[0].image);
                    angular.forEach(images.AlternateImages, function (alternateImage) {
                        result.push(alternateImage.image);
                    });
                    return result;
                }
                function getVisibleImages () {
                    var currentPosition = getCurrentPosition();
                    var offset = isStart() ? 1 : ( isEnd() ? -1 : 0 );

                    var position1 = currentPosition -1 + offset;
                    var position2 = currentPosition + offset;
                    var position3 = currentPosition + 1 + offset;

                    return [result[position1],result[position2],result[position3]];
                }

                function goToNext () {
                    if (!isEnd()) {
                        setPrimary(getNextImage());
                    }
                }

                function getNextImage () {
                    return result[getCurrentPosition() + 1];
                }

                function goToPrevious () {
                    if (!isStart()) {
                        setPrimary(getPreviousImage());
                    }
                }

                function getPreviousImage () {
                    return result[getCurrentPosition() - 1];
                }

                function isStart () {
                    return getCurrentPosition() === 0;
                }

                function isEnd () {
                    return getCurrentPosition() ===result.length - 1;
                }

                function getCurrentPosition () {
                    return result.indexOf(ctrl.primary);
                }

            }],
            scope: {
                images: '=',
                primary: '='
            }
        }  	
    }]);


})();
