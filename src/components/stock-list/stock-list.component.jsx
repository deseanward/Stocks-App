import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StockContext } from "../../store/context/stock.context";
import {
  StockListContainer,
  StockListHeader,
  StockListItem,
  StocksList,
} from "./stock-list.styles";

const StockList = () => {
  const { allStocks, formatPriceChange, formatPercentage, posOrNeg } =
    useContext(StockContext);

  // Sets the color of the 'Change' text in the header of stocks
  const [changedColor, setChangedColor] = useState("");

  const handleStockFocused = (e) => {
    setChangedColor(posOrNeg(e));
  };

  const variants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1, transition: { duration: "0.5" } },
  };

  return (
    <StockListContainer
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <StockListHeader>
        <span className="justify-self-start">
          <h3>Company</h3>
        </span>

        <span className='mr-4 text-right'>
          <h3>Price</h3>
        </span>

        <span className={changedColor}>
          <h3 className='text-right'>Change</h3>
        </span>
      </StockListHeader>
      <StocksList>
        {allStocks.length ? (
          allStocks.map((stocks) => {
            const stock = stocks[0];
            const url = `/stocks/${stock.symbol}`;
            
            return (
              <Link key={stock.symbol} to={url}>
                <StockListItem
                  className='stock'
                  onMouseEnter={() => handleStockFocused(stock.change)}
                  onMouseLeave={() => setChangedColor("")}
                >
                  <span>
                    {stock.name} ({stock.symbol})
                  </span>
                  <span className='mr-4 text-right'>
                    {stock.price.toFixed(2)}
                  </span>
                  <span className={posOrNeg(stock.changesPercentage)}>
                    {stock.change.toFixed(2)} (
                    {stock.changesPercentage.toFixed(2)}
                    %)
                  </span>
                </StockListItem>
              </Link>
            );
          })
        ) : (
          <h2>Loading Stocks...</h2>
        )}
      </StocksList>
    </StockListContainer>
  );
};

export default StockList;
