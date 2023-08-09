import { createContext, useReducer } from 'react';

import stocks from '../../data';
import { stockReducer } from '../reducer/stock.reducer';

export const StockContext = createContext({
	stockData: null,
	dispatch: () => {},
	formatPriceChange: () => {},
	formatPercentage: () => {},
	posOrNeg: () => {},
});

export const StockProvider = ({ children }) => {
	const [stockData, dispatch] = useReducer(stockReducer, stocks);

	// Converts and formats the 'Price' string value into a number
	const formatPriceChange = numToFormat => {
		const number = Number(numToFormat).toFixed(2);
		return number;
	};

	// Determin and format the percentage of change
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
		const result = number > 0 ? 'text-green-900' : 'text-red-900';

		return result;
	};

	const values = { stockData, formatPriceChange, formatPercentage, posOrNeg };

	return (
		<StockContext.Provider value={values}>{children}</StockContext.Provider>
	);
};
