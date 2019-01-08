function configure(api) {
	api.cache.using(() => process.env.NODE_ENV);
	const presets = [
		[
			'@babel/env',
			{
				targets: {
					node: 6
				}
			}
		]
	];
	const ignore = ['**/*.test.js'];
	return {
		presets,
		ignore
	};
}

module.exports = configure;
