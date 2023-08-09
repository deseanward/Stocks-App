import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StockContext } from '../../store/context/stock.context';
import {
	StockContainer,
	StockContent,
	InfoSection,
	StockPerformance,
	AboutSection,
} from './stock.styles';

const Stock = () => {
	const { stockData, formatPriceChange, formatPercentage, posOrNeg } =
		useContext(StockContext);
	const { symbol } = useParams();

	const theStock = stockData.filter(stock => stock.symbol === symbol);

	return (
		<StockContainer>
			<h1>
				{theStock[0].name} ({theStock[0].symbol})
			</h1>
			<StockContent>
				<StockPerformance>
					<InfoSection>
						<span>Open: {theStock[0].open}</span>
						<span>Last Price: {theStock[0].lastPrice}</span>
						<span>
							Change:{' '}
							<span className={posOrNeg(theStock[0].change)}>
								{formatPriceChange(theStock[0].change)} (
								{formatPercentage(theStock[0])}%)
							</span>
						</span>
					</InfoSection>

					<InfoSection>
						<span>High: {theStock[0].high}</span>
						<span>Low: {theStock[0].low}</span>
					</InfoSection>
				</StockPerformance>

				<AboutSection>
					<h3>About {theStock[0].name}</h3>

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
