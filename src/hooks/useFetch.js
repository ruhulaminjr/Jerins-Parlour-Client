import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let ismounted = true;
    axios.get(url).then((result) => {
      if (ismounted) {
        setData(result.data);
        setLoading(false);
        console.log(result);
      }
    });
    return () => (ismounted = false);
  }, []);
  return { data, loading };
};

export default useFetch;
