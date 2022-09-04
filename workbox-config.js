module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,png,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};