import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StockContext } from "../../store/context/stock.context";
import {
  StockListContainer,
  StockListHeader,
  StockListItem,
  StocksListing,
} from "./stock-list.styles";

const StockList = () => {
  // Grab the stocks data stored in 'StockContext'
  const { allStocks, formatPriceChange, formatPercentage, posOrNeg } =
    useContext(StockContext);

  // Sets the color of the 'Change' text in the header of stocks
  const [changedColor, setChangedColor] = useState("");

  const handleStockFocused = (e) => {
    setChangedColor(posOrNeg(e));
  };

  // Animation variants
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
      {/* STOCK LIST HEADER */}
      <StockListHeader>
        {/* COMPANY COLUMN */}
        <span className='justify-self-start'>
          <h3>Company</h3>
        </span>

        {/* PRICE COLUMN */}
        <span className='mr-4 text-right'>
          <h3>Price</h3>
        </span>

        {/* PRICE CHANGE COLUMN */}
        {/* SETS THE TEXT COLOR FOR NEGATIVE OR POSITIVE */}
        <span className={changedColor}>
          <h3 className='text-right'>Change</h3>
        </span>
      </StockListHeader>

      {/* LISTING OF THE STOCKS */}
      <StocksListing>
        {/* Checks if stocks are available to list */}
        {allStocks && allStocks.length ? (
          allStocks.map((stocks, idx) => {
            return stocks.map((stock) => {
              const url = `/stocks/${stock.symbol}`;

              return (
                /* Creats a stock listing */
                <Link key={idx} to={url}>
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
            });
          })
        ) : (
          <h2>Loading Stocks...</h2>
        )}
      </StocksListing>
    </StockListContainer>
  );
};

export default StockList;
