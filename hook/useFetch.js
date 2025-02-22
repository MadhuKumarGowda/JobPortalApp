import React, { useState, useEffect } from "react";
import axios from "axios";

//const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
<<<<<<< HEAD
      "x-rapidapi-key": "",
=======
      "x-rapidapi-key": "your API key",
>>>>>>> d4a83ea6011a11347db3600e70ecd34064ae3c01
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fecthData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      alert("There is an Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  const refetch = () => {
    setIsLoading(false);
    fecthData();
  };

  return { data, isLoading, isError, refetch };
};

export default useFetch;
