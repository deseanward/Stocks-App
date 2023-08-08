import React from 'react';
import { useParams } from 'react-router-dom';
import {
	StockContainer,
	StockContent,
	InfoSection,
	StockPerformance,
} from './stock.styles';

import stocks from '../../data';

const Stock = () => {
	const { symbol } = useParams();
	const currentStock = stocks.find(stock => stock.symbol === symbol);
	console.log(currentStock);
	return (
		<StockContainer>
			<h1>{currentStock.symbol}</h1>
			<StockContent>
				<InfoSection>
					<h3>{currentStock.name}</h3>
				</InfoSection>

				<StockPerformance>
					<InfoSection>
						<span>Open: {currentStock.open}</span>
						<span>Last Price: {currentStock.lastPrice}</span>
						<span>Change: {currentStock.change}</span>
					</InfoSection>

					<InfoSection>
						<span>High: {currentStock.high}</span>
						<span>Low: {currentStock.low}</span>
					</InfoSection>
				</StockPerformance>
			</StockContent>
		</StockContainer>
	);
};

export default Stock;
