//Integration Testing
describe('Testing MyRetail Test Suite', function() {
	var json, purchasingChannelCode;
	beforeEach(function () {
		browser.get('http://localhost:8000/#!/product');
		json = require('../../js/components/product/item-data.json');
		purchasingChannelCode = json.CatalogEntryView[0].purchasingChannelCode;

	});
	var clickButtonUntilNotDisplayed = function(element) {
		element.isDisplayed().then(function(visible) {
			if (visible) {
				element.click();
				clickButtonUntilNotDisplayed(element);
			} else {
				return true;
			}
		}, function(err)  {
			console.log("Error");
			return false;
		})
	};
	
	it('should have title correctly set', function() {
		var title = element(by.id('product-title'));
		expect(title.getText()).toEqual(json.CatalogEntryView[0].title);
	});

	it('should have price correctly set', function () {
		var offerPrice = element(by.id('offer-price'));
		expect(offerPrice.getText()).toEqual(json.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue);	  
	});

	describe('Testing Add To Cart Button', function () {

		it('should display add to cart button if purchasingChannelCode is 0 or 1', function () {
			var showButton = (purchasingChannelCode === '0' || purchasingChannelCode === '1') ? true : false;

			var button = element(by.id('addToCart'));

			if (showButton) {
				expect(button.isPresent()).toBe(true);
			} else {
				expect(button.isPresent()).toBe(false);
			}
		});

	});

	describe('Testing Pick Up In Store Button', function () {

		it('should display pick up in store button if ', function () {
			var showButton = (purchasingChannelCode === '0' || purchasingChannelCode === '2') ? true : false;

			var button = element(by.id('pickUpInStore'));

			if (showButton) {
				expect(button.isPresent()).toBe(true);
			} else {
				expect(button.isPresent()).toBe(false);
			}
		});

	});

	describe('Testing Carousel', function () {

		it('should display default primary images', function(){
			var primaryImage = element(by.id('primaryImage'));
			expect(primaryImage.getAttribute("src")).toBe(json.CatalogEntryView[0].Images[0].PrimaryImage[0].image);		   
		});
		it('should display image if selected', function () {
			var primaryImage = element(by.id('primaryImage'));
			var selectedImage = element(by.css('.primaryThumbnail'));

			expect(primaryImage.getAttribute("src")).toBe(selectedImage.getAttribute("src"));
		});

		it('should display next image when carousel is moved to the right', function () {
			var currentPrimaryImage = element(by.id('primaryImage')).getAttribute("src");
			var currentSelectedImage = element(by.css('.primaryThumbnail')).getAttribute("src");

			element(by.id('goToNext')).click();

			var newSelectedImage = element(by.css('.primaryThumbnail')).getAttribute("src");
			var newPrimaryImage = element(by.id('primaryImage')).getAttribute("src");

			expect(currentSelectedImage === newSelectedImage).toBe(false);
			expect(currentPrimaryImage === newPrimaryImage).toBe(false);
			expect(newPrimaryImage).toBe(newSelectedImage);

		});

		it('should have no back arrow if at first image', function () {
			var primaryImage = element(by.id('primaryImage'));

			clickButtonUntilNotDisplayed(element(by.id('goToPrevious')));

			expect(element(by.id('goToPrevious')).isDisplayed()).toBe(false);

		});

		it('should have no next arrow if at last image', function () {
			var clicks = json.CatalogEntryView[0].Images[0].AlternateImages.length;

			clickButtonUntilNotDisplayed(element(by.id('goToNext')));

			expect(element(by.id('goToNext')).isDisplayed()).toBe(false);
		});	

	});

});
