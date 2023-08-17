import React, { useContext } from 'react';

import { StockContext } from '../../store/context/stock.context';

import { StockNewsContainer, NewsItemContainer } from './stock-news.styles';

const StockNews = () => {
	const { newsData } = useContext(StockContext);

	return (
		<StockNewsContainer>
			<h2 className='bg-[tan] p-2'>Trending</h2>
            {
                newsData
                    ? newsData.forEach(news =>
                        news.content.map(story => {
                            return (
                                <NewsItemContainer>
                                    <h3>{story.title}</h3>
                                </NewsItemContainer>
                            );
                }))
                : <h3>Loading...</h3>
        }
		</StockNewsContainer>
	);
};

export default StockNews;
