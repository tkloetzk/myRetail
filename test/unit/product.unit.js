//Unit Testing - TODO
describe('Testing MyRetail Test Suite', function() {
	var json, purchasingChannelCode, controller = null;

	beforeEach(function() {angular.module("myRetail")});
	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		controller = $controller('ProductCtrl', {
			'$scope': $scope
		});
	}));

	it('should have a ProductCtrl controller', function() {
    	expect($scope.isAvailableOnline).toBe("0");
    });

	it('should have a working ProductService service', inject(['ProductService', 
    	function(ProductService){
    	}
	]));

});
