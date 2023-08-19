import React, { useContext, useEffect, useState } from "react";
import { StockContext } from "../../store/context/stock.context";

import { StickerMarkeeContainer } from "./sticker-markee.styles";

const StickerMarkee = () => {
  const [markee, setMarkee] = useState("");
  const { allStocks, formatPriceChange, formatPercentage, posOrNeg } =
    useContext(StockContext);

  useEffect(() => {
    try {
      let stocksMarkee = "";

      allStocks.forEach((stocks) => {
        const stock = stocks[0];
        let markeeEl = `${stock.name} (${stock.symbol}): ${stock.price}  |  `;
        stocksMarkee += markeeEl;
      });
      setMarkee(stocksMarkee);
    } catch (error) {
      console.log(error);
    }
  }, [allStocks]);

  return (
    <StickerMarkeeContainer>
      <span className='scrolling'>{markee}</span>
      <span className='scrolling'>{markee}</span>
    </StickerMarkeeContainer>
  );
};

export default StickerMarkee;
