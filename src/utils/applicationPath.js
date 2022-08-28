const PATH = {
	GET_IMAGE_PATH: (path) => {
		return require('@/assets/img' + '/' + path);
		// usage in components : this.$Path.GET_IMAGE_PATH('apple-icon.png')
	},
};

export default PATH;
