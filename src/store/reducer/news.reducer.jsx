export const newsReducer = (newsData, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FETCH_NEWS':
			console.log(newsData);
			return newsData;
			break;
		default:
			break;
	}
};
