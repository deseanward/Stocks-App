export const fetchStocks = async (req) => {
  const url = req;
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log("FROM API: ", result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
