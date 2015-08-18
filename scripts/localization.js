var localization = {
	culture: "en-us",
	
	/* replace this function with alternate URL composition schemes */
	getLocalizedResourceUrl: function(identifier) {
		return "/resources/" + identifier + "/" + this.culture;
	}
};