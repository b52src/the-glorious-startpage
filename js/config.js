class Config {

	constructor() {
		this.getQuickSearchData = this.getQuickSearchData.bind(this);
		this.getSearchEngines = this.getSearchEngines.bind(this);
		this.getWebSites = this.getWebSites.bind(this);
		this.getDockSites = this.getDockSites.bind(this);
	}

	getQuickSearchData = () => {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://reddit.com/r/'
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'u/': {
				urlPrefix: 'https://unsplash.com/s/photos/'
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='	
			},
			'e/': {
				urlPrefix: 'https://ebay.com/sch/?_nkw='
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			'n/': {
				urlPrefix: 'https://nhentai.net/g/'	
			}
		};

		return quickSearchData;
	}
	

	getSearchEngines = () => {

		const searchEngines = {
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q='
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q='
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q='
			},
			'yahoo': {
				name: 'Yahoo',
				prefix: 'https://search.yahoo.com/search?p='
			},
			'bing': {
				name: 'Bing',
				prefix: 'https://www.bing.com/search?q='
			}
		};

		return searchEngines;
	}

	getWebSites = () => {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'StartPage Config',
				icon: 'github',
				url: 'https://github.com/b52src/the-glorious-startpage',
				category: 'development'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			}
		];

		return webSites;
	}

	getDockSites = () => {
		// Dock
		// A list of websites that will be generated and put on the dock
		const dockSites = [
			{
				site: 'Work Start',
				icon: 'SL',
				url: 'http://localhost:8123'
			},
			{
				site: 'Orginizer',
				icon: 'organizr',
				url: 'http://192.168.86.44:5010'
			},
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/'
			}
		];

		return dockSites;
	}
}
