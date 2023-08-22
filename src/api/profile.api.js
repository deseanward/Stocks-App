export const fetchProfile = async (req) => {
    const url = req;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "caddb6d987msh6d6fc206314e9abp1e6985jsnc4f9c821cd6f",
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log('FROM API: ', result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };