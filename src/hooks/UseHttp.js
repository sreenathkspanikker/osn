import { useState, useEffect } from "react";
import { post } from "../server/RequestManager";

const useHttp = (url, params, dependency) => {
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await post(url, params);
      setState(res);
    };
    fetchData();
    return () => {
      setLoading(true);
    };
  }, [dependency]);

  return [isLoading, state];
};

export default useHttp;
