import { createContext, useReducer, useState, useEffect } from 'react';

// Import the api call
import { fetchStocks } from '../../api/stocks.api';

import stocks from '../../data';
import { stockReducer } from '../reducer/stock.reducer';
import { newsReducer } from '../reducer/news.reducer';
import { profileReducer } from '../reducer/profile.reducer';

export const StockContext = createContext({
	stockData: null,
	profileData: null,
	newsData: null,
	dispatchStock: () => {},
	dispatchProfile: () => {},
	formatPriceChange: () => {},
	formatPercentage: () => {},
	posOrNeg: () => {},
});

export const StockProvider = ({ children }) => {
	// Holds the data returned for setting state
	const theStocks = [];
	const theProfiles = [];
	const theNews = [];

	// Uncomment for accesing data saved in local storage
	const myStocks = JSON.parse(localStorage.getItem('allStocks'));
	const myProfiles = JSON.parse(localStorage.getItem('stockProfiles'));
	const myNews = JSON.parse(localStorage.getItem('stockNews'));

	// Sets the state according to the returned data
	const [allStocks, setAllStocks] = useState(myStocks);
	const [stockProfiles, setStockProfiles] = useState(myProfiles);
	const [stockNews, setStockNews] = useState(myNews);

	// Stock Reducer
	const [stockData, dispatchStock] = useReducer(stockReducer, allStocks);

	// News Reducer
	const [newsData, dispatchNews] = useReducer(newsReducer, stockNews);
	// newsData.forEach(news => news.content.forEach(story => console.log(story)));

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
		newsData,
		formatPriceChange,
		formatPercentage,
		posOrNeg,
	};

	useEffect(() => {
		//localStorage.clear()
		const fetchStock = async () => {
			try {
				let symbol;
				console.log('STOCKS: ', stocks)
				for (let x = 0; x < stocks.length; x++) {
					symbol = stocks[x].symbol;
					const data = await fetchStocks(
						`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
					);
					console.log(data);
					!theStocks[x] && theStocks.push(data[0]);
				setAllStocks(theStocks);
					localStorage.setItem(
						'allStocks',
						JSON.stringify(theStocks)
					);
					const profile = await fetchStocks(
						`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
					);
					!theProfiles[x] && theProfiles.push(profile[0]);
				setStockProfiles(theProfiles);
					localStorage.setItem(
						'stockProfiles',
						JSON.stringify(theProfiles)
					);
				}
				const news = await fetchStocks(
					`https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=5&apikey=${apiKey}`
				);
				theNews.push(news);
				setStockNews(theNews);
				localStorage.setItem('stockNews', JSON.stringify(theNews));
			} catch (error) {
				console.log(error);
			}
		};
		if (!localStorage.getItem('allStocks')) fetchStock();
	}, []);

	return (
		<StockContext.Provider value={values}>{children}</StockContext.Provider>
	);
};
