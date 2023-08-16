import React, { useContext, useEffect, useState } from 'react';
import { StockContext } from '../../store/context/stock.context';

import { StickerMarkeeContainer } from './sticker-markee.styles';

const StickerMarkee = () => {
	const [markee, setMarkee] = useState('');
	const { stockData, formatPriceChange, formatPercentage, posOrNeg } =
		useContext(StockContext);

	useEffect(() => {
		let stocksMarkee = '';
		stockData.forEach(stock => {
			let markeeEl = `${stock.name} (${stock.symbol}): ${stock.price}  |  `;
			stocksMarkee += markeeEl;
		});
		setMarkee(stocksMarkee);
	}, []);

	return (
		<StickerMarkeeContainer>
			<span className='scrolling'>{markee}</span>
			<span className='scrolling'>{markee}</span>
		</StickerMarkeeContainer>
	);
};

export default StickerMarkee;
