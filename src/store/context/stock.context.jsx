import { createContext, useReducer, useState, useEffect } from 'react';

// Import the api call
import { fetchStocks } from '../../api/stocks.api';

import stocks from '../../data';
import { stockReducer } from '../reducer/stock.reducer';
import { newsReducer } from '../reducer/news.reducer';
import { profileReducer } from '../reducer/profile.reducer';

export const StockContext = createContext({
	stockData: null,
	dispatchStock: () => {},
	dispatchProfile: () => {},
	formatPriceChange: () => {},
	formatPercentage: () => {},
	posOrNeg: () => {},
});

export const StockProvider = ({ children }) => {
	// Holds the data returned for local storage saving
	const stocks = [];
	const profiles = [];
	const news = [];

	const [allStocks, setAllStocks] = useState(
		JSON.parse(localStorage.getItem('allStocks'))
	);

	const [stockProfiles, setStockProfiles] = useState(
		JSON.parse(localStorage.getItem('stockProfiles'))
	);

	const [stockNews, setStockNews] = useState(
		JSON.parse(localStorage.getItem('stockNews'))
	);

	// Stock Reducer
	const [stockData, dispatchStock] = useReducer(stockReducer, allStocks);

	// News Reducer
	const [newsData, dispatchNews] = useReducer(newsReducer, stockNews);

	// Stock Profile Reducer
	const [profileData, dispatchProfile] = useReducer(
		profileReducer,
		stockProfiles
	);

	// const apiKey = process.env.REACT_APP_STOCKS_API_KEY;
	const apiKey = '75d989687bc9431648c55142c47e01c5';

	// Converts and formats the 'Price' string value into a number
	const formatPriceChange = numToFormat => {
		const number = Number(numToFormat).toFixed(2);
		return number;
	};

	// Determine and format the percentage of change
	const formatPercentage = stock => {
		const open = Number(stock.open);
		const last = Number(stock.lastPrice);

		const f = (last / open) * 100;
		const p = 100 - f;

		return p.toFixed(2);
	};

	// Checks if the change of stock price is positive or negative and sets the color
	const posOrNeg = numToCheck => {
		const number = Number(numToCheck);

		// Determines the text color
		const result =
			number > 0
				? 'text-green-900 text-right'
				: 'text-red-900 text-right';

		return result;
	};

	const values = {
		stockData,
		profileData,
		formatPriceChange,
		formatPercentage,
		posOrNeg,
	};

	useEffect(() => {
		const fetchStock = async () => {
			try {
				let symbol;
				for (let x = 0; x < stocks.length; x++) {
					symbol = stocks[x].symbol;
					const data = await fetchStocks(
						`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
					);

					!stocks[x] && stocks.push(data[0]);
					localStorage.setItem(
						'allStocks',
						JSON.stringify(allStocks)
					);
					const profile = await fetchStocks(
						`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
					);
					!profiles[x] && profiles.push(profile[0]);
					localStorage.setItem(
						'stockProfiles',
						JSON.stringify(stockProfiles)
					);
					// data && setStocks(data);
					// console.log(allStocks);
				}
				const news = await fetchStocks(
					`https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=5&apikey=${apiKey}`
				);

				stockNews.push(news);
				localStorage.setItem('stockNews', JSON.stringify(stockNews));

				console.log(allStocks);
				console.log(stockProfiles);
				console.log(stockNews);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStock();
	}, []);

	
	return (
		<StockContext.Provider value={values}>{children}</StockContext.Provider>
	);
};
