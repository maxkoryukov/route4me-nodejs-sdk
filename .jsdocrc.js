module.exports = {
	"source": {
		"include": [
			"./src",
			"./examples"
		]
	},
	"plugins": [
		"plugins/markdown"
	//	"plugins/summarize"
	],
	"templates": {
		"cleverLinks": true,
		"monospaceLinks": false
	},
	"opts": {
		"template": "node_modules/docdash",

		"encoding": "utf8",
		"destination": "./docs/",
		"recurse": true,
		"tutorials": "./tutorials/articles",
		"readme": "./tutorials/index.md",
		//"package": "./package.json",		// commented, because it places doc to the /<PKG>/<VER>/folder
		"private": true,

		"pedantic": true,
		"verbose": true
	},
	"markdown": {
		"idInHeadings": true
	},
	"docdash": {
		"static": true,  // Display the static members inside the navbar
		"sort": false     // Sort the methods in the navbar
	}

}
