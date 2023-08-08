import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	StockListContainer,
	StockListContent,
	StockListItem,
} from './stock-list.styles';

const StockList = ({ stocks }) => {
	// Checks if the change of stock price is positive or negative
	const posOrNeg = numToCheck => {
		const number = Number(numToCheck);

		// Determines the text color
		const result = number > 0 ? 'text-green-900' : 'text-red-900';

		return result;
	};

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

	return (
		<StockListContainer>
			<StockListContent>
				<span>
					<h3>Company Name</h3>
				</span>

				<span>
					<h3>Price</h3>
				</span>

				<span>
					<h3>Change</h3>
				</span>
			</StockListContent>
			{stocks ? (
				stocks.map(stock => {
					const url = `/stocks/${stock.symbol}`;
					return (
						<Link key={stock.symbol} to={url}>
							<StockListItem>
								<span>
									{stock.name} ({stock.symbol})
								</span>
								<span>{stock.lastPrice}</span>
								<span className={posOrNeg(stock.change)}>
									{formatPriceChange(stock.change)} (
									{formatPercentage(stock)}%)
								</span>
							</StockListItem>
						</Link>
					);
				})
			) : (
				<h2>Loading Stocks...</h2>
			)}
		</StockListContainer>
	);
};

export default StockList;
