import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StockContext } from "../../store/context/stock.context";

import { BiLinkExternal } from "react-icons/bi";

import { StockNewsContainer, NewsItemContainer } from "./stock-news.styles";

const StockNews = () => {
  // Call the stock news api from useContext
  const { stockNews } = useContext(StockContext);

  return (
    <div className=''>
      <h3 className='header rounded-lg heading bg-[#3DBB9A] p-2'>Trending</h3>
      <StockNewsContainer>
        <div className='content'>
        
          {/* Check if there is stock news to display */}
          {stockNews && stockNews.length ? (
            stockNews.map((story, idx) => (
              <Link key={idx} to={story.url} target='blank'>
                <NewsItemContainer className='text-sm hover:text-[tan]'>
                  <span className='text-sm'>{story.title}</span>{" "}
                  <span>
                    <BiLinkExternal className='inline' id='arrow' />
                  </span>
                </NewsItemContainer>
              </Link>
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </StockNewsContainer>
    </div>
  );
};

export default StockNews;
