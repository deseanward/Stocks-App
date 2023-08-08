import React from 'react';
import { useParams } from 'react-router-dom';
import {
	StockContainer,
	StockContent,
	InfoSection,
	StockPerformance,
	AboutSection,
} from './stock.styles';

import stocks from '../../data';

const Stock = () => {
	const { symbol } = useParams();
	const currentStock = stocks.find(stock => stock.symbol === symbol);
	console.log(currentStock);
	return (
		<StockContainer>
			<h1>
				{currentStock.name} ({currentStock.symbol})
			</h1>
			<StockContent>
				<StockPerformance>
					<InfoSection>
						<span>Open: {currentStock.open}</span>
						<span>Last Price: {currentStock.lastPrice}</span>
						<span>Change: {(currentStock.change).toFixed(2)}</span>
					</InfoSection>

					<InfoSection>
						<span>High: {currentStock.high}</span>
						<span>Low: {currentStock.low}</span>
					</InfoSection>
				</StockPerformance>

				<AboutSection>
					<h3>About {currentStock.name}</h3>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Facilis fuga eos maxime tempore omnis, dolorum
						nulla quo vel eius praesentium saepe obcaecati possimus
						culpa blanditiis voluptatem fugit architecto.
						Blanditiis, similique?
					</p>
					<p>
						Quos impedit excepturi itaque! Necessitatibus modi error
						nemo repudiandae iste perferendis quaerat est explicabo
						ea! Deleniti, exercitationem est ad accusamus labore
						minus, dolores vero pariatur impedit hic nostrum nemo
						omnis!
					</p>
				</AboutSection>
			</StockContent>
		</StockContainer>
	);
};

export default Stock;
