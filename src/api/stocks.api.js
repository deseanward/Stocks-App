export const fetchStocks = async (req, res) => {
	try {
		res = await fetch(req);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log('Error fetching stocks: ', error);
	}
};
