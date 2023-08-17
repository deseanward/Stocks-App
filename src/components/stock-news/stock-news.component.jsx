import React, { useContext } from 'react';

import { StockContext } from '../../store/context/stock.context';

import { StockNewsContainer, NewsItemContainer } from './stock-news.styles';

const StockNews = () => {
	const { newsData } = useContext(StockContext);

	return (
		<div className=''>
			<h2 className='heading bg-[tan] p-2'>Trending</h2>
			<StockNewsContainer>
				<div className='content'>
					{newsData ? (
						newsData.map(news => {
							return news.content.map((story, idx) => (
								<div key={idx}>{story.title}</div>
							));
						})
					) : (
						<h3>Loading...</h3>
					)}
				</div>
			</StockNewsContainer>
		</div>
	);
};

export default StockNews;
