import { createContext, useEffect, useState } from "react";

// Import the api call
import { fetchStocks } from "../../api/stocks.api";
// import { fetchProfile } from "../../api/profile.api";
import { fetchNews } from "../../api/news.api";

import stocks from "../../data";

export const StockContext = createContext({
  allStocks: [],
  stockProfiles: [],
  stockNews: [],
  parseStock: () => {},
  parseProfile: () => {},
  dispatchStocks: () => {},
  formatPriceChange: () => {},
  formatPercentage: () => {},
  posOrNeg: () => {},
  fetchTheNews: () => {},
});

export const StockProvider = ({ children }) => {
  // For accessing  data saved in local storage
  const localStocks = JSON.parse(sessionStorage.getItem("allStocks"));

  const localProfile = JSON.parse(sessionStorage.getItem("stockProfiles"));

  const localNews = JSON.parse(sessionStorage.getItem("stockNews"));

  const [allStocks, setAllStocks] = useState(localStocks);
  const [stockProfiles, setStockProfiles] = useState(localProfile);
  const [stockNews, setStockNews] = useState(localNews);

  const apiKey2 = process.env.REACT_APP_STOCKS_API_KEY;

  // API Key for News
  const newsApiKey = process.env.REACT_APP_STOCKS_NEWS_API_KEY;

  // Converts and formats the 'Price' string value into a number
  const formatPriceChange = (numToFormat) => {
    const number = Number(numToFormat).toFixed(2);
    return number;
  };

  // Determine and format the percentage of change
  const formatPercentage = (stock) => {
    const open = Number(stock.open);
    const last = Number(stock.lastPrice);

    const f = (last / open) * 100;
    const p = 100 - f;

    return p.toFixed(2);
  };

  // Checks if the change of stock price is positive or negative and sets the color
  const posOrNeg = (numToCheck) => {
    const number = Number(numToCheck);

    // Determines the text color
    const result =
      number > 0 ? "text-[#3DBB9A] text-right" : "text-[#D9252D] text-right";

    return result;
  };

  // Call to fetch the stocks from the api
  const fetchTheStocks = async () => {
    const fetchedStocks = [];

    try {
      let symbol;

      for (let x = 0; x < stocks.length; x++) {
        symbol = stocks[x].symbol;

        let stock = await fetchStocks(
          `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey2}`
        );

        fetchedStocks.push(stock);
      }
      setAllStocks(fetchedStocks);
      sessionStorage.setItem("allStocks", JSON.stringify(fetchedStocks));
    } catch (error) {
      console.log("ERROR FETCHING STOCKS: ", error);
    }
  };

  const fetchTheProfiles = async () => {
    const profiles = [];

    try {
      let symbol;

      for (let x = 0; x < stocks.length; x++) {
        symbol = stocks[x].symbol;

        // Get the profiles
        let profile = await fetchStocks(
          `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey2}`
        );
        profiles.push(profile);
      }

      setStockProfiles(profiles);
      sessionStorage.setItem("stockProfiles", JSON.stringify(profiles));
    } catch (error) {
      console.log("ERROR FETCHING PROFILES: ", error);
    }
  };

  const fetchTheNews = async () => {
    const theNews = [];

    try {
      let symbol;

      for (let x = 0; x < stocks.length; x++) {
        symbol = stocks[x].symbol;

        // New Stock News API
        let news = await fetchNews(
          `https://corsproxy.io/?https://api.profit.com/data-api/fundamentals/media/news?token=${newsApiKey}&symbol=${symbol}&skip=0&limit=10&sort=desc`
        );

        theNews.push(news);
        setStockNews(news);
        sessionStorage.setItem("stockNews", JSON.stringify(news));
        return news;
      }
    } catch (error) {
      console.log("ERROR FETCHING NEWS: ", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      /**
       * GET THE STOCKS
       */
      // Check to see if there's stock data saved in session storage
      if (sessionStorage.getItem("allStocks")) {

        // If there's data, cache it in the variable 'gotSocks'
        const gotStocks = JSON.parse(sessionStorage.getItem("allStocks"));

        // If the state of 'allStocks' is empty(false), set it the the contents of 'gotStocks'
        !allStocks && setAllStocks(gotStocks);
      } else {
        // If the is no session storage data, and 'allStocks' is empty, fetch the
        // stock data from the api
        !allStocks && fetchTheStocks();
      }

      /**
       * GET THE PROFILES
       */
      // Check to see if there's profile data saved in session storage
      if (sessionStorage.getItem("stockProfiles")) {

        // If there's data, cache it in the variable 'gotNews'
        const gotProfiles = JSON.parse(sessionStorage.getItem("stockProfiles"));

        // If the state of 'allStocks' is empty(false), set it the the contents of 'gotStocks'
        !stockProfiles && stockProfiles.push(gotProfiles);
      } else {
        // If the is no session storage data, and 'allStocks' is empty, fetch the
        // stock data from the api 
        !stockProfiles && fetchTheProfiles();
      }

      /**
       * GET THE NEWS
       */
       // Check to see if there's news data saved in session storage
      if (sessionStorage.getItem("stockNews")) {

        // If there's data, cache it in the variable 'gotNews'
        const gotNews = JSON.parse(sessionStorage.getItem("stockNews"));

        // If the state of 'allStocks' is empty(false), set it the the contents of 'gotStocks'
        !stockNews && stockNews.push(gotNews);
      } else {
        // If the is no session storage data, and 'allStocks' is empty, fetch the
        // stock data from the api
        !stockNews && fetchTheNews(); 
      }
    };

    /**
     * FETCH ALL DATA
     */
    getData();
  }, []);

  const values = {
    allStocks,
    stockProfiles,
    stockNews,
    formatPriceChange,
    formatPercentage,
    posOrNeg,
    fetchTheNews,
  };

  return (
    <StockContext.Provider value={values}>{children}</StockContext.Provider>
  );
};
