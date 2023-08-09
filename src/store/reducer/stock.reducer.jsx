export const stockReducer = (stockData, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FETCH_STOCKS':
			console.log(stockData);
			return stockData;
			break;
		default:
			break;
	}
};
