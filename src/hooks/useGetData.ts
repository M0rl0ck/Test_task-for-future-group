import { useEffect, useState } from "react";
import IData from "../infostructure/IData";

const useGetData = (url: string) => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getData = async () => {
      setData([]);
      setIsLoading(true);
      setError(null);
      try {
        const responce = await fetch(url, { signal });
        const data = await responce.json();
        setData(data);
      } catch (e) {
        if (e instanceof Error) {
          if (signal.aborted) {
            console.log("fetching is abborted");
          } else {
            setError(e);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (url) {
      getData();
    }
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useGetData;
