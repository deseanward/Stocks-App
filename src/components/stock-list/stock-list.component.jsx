import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StockContext } from '../../store/context/stock.context';
import {
	StockListContainer,
	StockListContent,
	StockListItem,
} from './stock-list.styles';

const StockList = () => {
	const { stockData, formatPriceChange, formatPercentage, posOrNeg } =
		useContext(StockContext);
	let location = useLocation();

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
			{stockData ? (
				stockData.map(stock => {
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
