export const mapper = (images) => {
	return images.map(({ id, largeImageURL, webformatURL}) => ({
		largeImageURL,
		webformatURL,
		id,
	}));
};