import { createContext, useEffect, useState } from "react";

// Import the api call
import { fetchStocks } from "../../api/stocks.api";
import { fetchProfile } from "../../api/profile.api";
import { fetchNews } from "../../api/news.api";

import stocks from "../../data";

export const StockContext = createContext({
  allStocks: [],
  stockProfiles: [],
  stockNews: [],
  parsedStocks: [],
  parsedProfiles: [],
  parseStock: () => {},
  parseProfile: () => {},
  dispatchStocks: () => {},
  formatPriceChange: () => {},
  formatPercentage: () => {},
  posOrNeg: () => {},
  fetchTheNews: () => {},
});

export const StockProvider = ({ children }) => {
  const [parsedStocks, setParsedStocks] = useState([]);
  const [parsedProfiles, setParsedProfiles] = useState([]);

  // For accessing  data saved in local storage
  const localStocks = JSON.parse(localStorage.getItem("allStocks"));

  const localProfile = JSON.parse(localStorage.getItem("stockProfiles"));

  const localNews = JSON.parse(localStorage.getItem("stockNews"));

  const [allStocks, setAllStocks] = useState(localStocks);
  const [stockProfiles, setStockProfiles] = useState(localProfile);
  const [stockNews, setStockNews] = useState(localNews);


  const apiKey2 = process.env.REACT_APP_STOCK_API_KEY

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

  const fetchTheStocks = async () => {
    console.log("INSIDE FETCH THE STOCKS");
    const fetchedStocks = [];

    try {
      let symbol;

      for (let x = 0; x < stocks.length; x++) {
        symbol = stocks[x].symbol;

        console.log("Attempting Fetch...");
        let stock = await fetchStocks(
          `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey2}`
        );

        fetchedStocks.push(stock);
      }
      console.log(fetchedStocks);
      setAllStocks(fetchedStocks);
      localStorage.setItem("allStocks", JSON.stringify(fetchedStocks));

    } catch (error) {
      console.log("ERROR FETCHING STOCKS: ", error);
    }
  };

  const fetchTheProfiles = async () => {
    console.log("INSIDE FETCH THE PROFILES");
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
      localStorage.setItem("stockProfiles", JSON.stringify(profiles));
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
        localStorage.setItem("stockNews", JSON.stringify(news));
        return news;
      }
    } catch (error) {
      console.log("ERROR FETCHING NEWS: ", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      // Get the Stocks
      if (localStorage.getItem("allStocks")) {
        const gotStocks = JSON.parse(localStorage.getItem("allStocks"));
        !allStocks && setAllStocks(gotStocks);
        console.log("ALL STOCKS FROM USE EFFECT: ", allStocks);
      } else {
        console.log("NO local DATA");
        !allStocks && fetchTheStocks();
      }

      // Get the Profiles
      if (localStorage.getItem("stockProfiles")) {
        const gotProfiles = JSON.parse(localStorage.getItem("stockProfiles"));
        !stockProfiles && stockProfiles.push(gotProfiles);
        console.log("ALL PROFILES FROM  USE EFFECT: ", stockProfiles);
      } else !stockProfiles && fetchTheProfiles();

      if (localStorage.getItem("stockNews")) {
        const gotNews = JSON.parse(localStorage.getItem("stockNews"));
        console.log("GOT THE NEWS: ", gotNews);
        !stockNews && stockNews.push(gotNews);
      } else !stockNews && fetchTheNews();

      // fetchTheNews()
    };

    // getData();
  }, []);

  const values = {
    allStocks,
    stockProfiles,
    stockNews,
    parsedStocks,
    parsedProfiles,
    formatPriceChange,
    formatPercentage,
    posOrNeg,
    fetchTheNews,
  };

  return (
    <StockContext.Provider value={values}>{children}</StockContext.Provider>
  );
};
