var selectEngine = document.getElementById("searchEngineSelect");
var searchBox = document.getElementById("searchBox");

// Get default search engine
var defaultEngine = configData.searchEngine;

let searchQueryPrefix;

// Update query string and placeholder
function selectQueryString() {

	if (defaultEngine === "google") {
		searchQueryPrefix = 'http://www.google.com/search?q=';
		searchBox.placeholder = "Search with Google";

	} else if (defaultEngine === "duckduckgo") {
		searchQueryPrefix = 'https://duckduckgo.com/?q=';
		searchBox.placeholder = "Search with Duckduckgo";

	} else if (defaultEngine === "ecosia") {
		searchQueryPrefix = 'https://www.ecosia.org/search?q=';
		searchBox.placeholder = "Search with Ecosia";
	
	} else {
		searchQueryPrefix = 'http://www.google.com/search?q=';
		searchBox.placeholder = "Search with Google";
	}

}

// Use this to select the default search engine on startup
function selectTheEngine() {
	// Available values: google, duckduckgo, ecosia
    selectEngine.value = defaultEngine;
    selectQueryString();
}

// Call
selectTheEngine();

// Execute something if the value changes
selectEngine.onchange = function() { 
	
	// Get Value
	var selectedEngine = selectEngine.options[selectEngine.selectedIndex].value;
	defaultEngine = selectedEngine;
	selectTheEngine()

}