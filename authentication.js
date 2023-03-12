const authentication = {
	type: 'custom',
	// "test" could also be a function
	test: {
		url: 'https://926f-103-214-60-164.ngrok.io/zapier',
	},
	fields: [
		{
			key: 'api_key',
			type: 'string',
			required: true,
			helpText: 'Found on your settings page.',
		},
	],
}

module.exports = authentication
