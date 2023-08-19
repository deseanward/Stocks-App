// Import the api call
import { fetchStocks } from "../../api/stocks.api";

const state = [];

export const newsReducer = (newsData, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_NEWS":
      const fetchData = async () => {
        const req = await fetchStocks(payload);
        const res = await req;
        state.push(res);
        return state;
      };

      fetchData();
      break;
    default:
      break;
  }
};
