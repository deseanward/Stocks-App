export const fetchNews = async (req) => {
  try {
    const res = await fetch(req);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("There was an error fetching the news. ", error);
  }
};
