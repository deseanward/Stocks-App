// Import the api call
import { fetchStocks } from "../../api/stocks.api";

const stocks = [];
const profiles = [];

export const stockReducer = (newsData, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_STOCKS":
      const fetchData = async () => {
        const req = await fetchStocks(payload);
        const res = await req.json();
        stocks.push(res);
        console.log(stocks);
        return stocks;
      };

      fetchData();
      break;
    case "FETCH_PROFILES":
      const fetchProfiles = async () => {
        const req = await fetchStocks(payload);
        const res = await req;
        profiles.push(res);
        return profiles;
      };

      fetchProfiles();
      break;
    case "FETCH_NEWS":
      const fetchNews = async () => {
        const req = await fetchStocks(payload);
        const res = await req;
        return res;
      };

      fetchNews();
      break;
    default:
      break;
  }
};
