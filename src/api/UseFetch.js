import { useEffect, useState } from "react";
import axios from "axios";
export const BASE_URL = "http://localhost:8080/api";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error };
};

export default useFetch;