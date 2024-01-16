import { useEffect, useState } from "react";
import IData from "../infostructure/IData";

const useGetData = (url: string) => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      setData([]);
      setIsLoading(true);
      setError(null);
      try {
        const responce = await fetch(url);
        const data = await responce.json();
        setData(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (url) {
      getData();
    }
  }, [url]);

  return { data, isLoading, error };
};

export default useGetData;
