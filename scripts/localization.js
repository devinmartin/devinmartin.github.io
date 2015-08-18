var localization = {
	culture: "en-us",
	elements: [],
	
	setCulture(culture) {
		this.culture = culture;
		$.each(this.elements, function(index, value) {
			this.performLocalization(value.element, value.identifier);
		});
	},
	/* replace this function with alternate URL composition schemes */
	getLocalizedResourceUrl: function(identifier, currentCulture) {
		return "/resources/" + identifier + "/" + currentCulture;
	},
	
	/* takes a dom element and an identifier and performs localization */
	localize: function(element, identifier) {
		this.elements.push({element:element, identifier:identifier});
		this.performLocalization(element, identifier);
	},
	
	performLocalization: function(element, identifier) {
	}
};