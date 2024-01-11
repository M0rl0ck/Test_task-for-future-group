import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ChoiceSizeData from "./component/ChoiceSizeData/choiceSizeData";
import { URL_DATA } from "./constants/urls";
import IData from "./infostructure/IData";
import Table from "./component/table/Table";

function App() {
  const [dataSize, setDataSize] = useState<"big" | "small" | null>(null);
  const [data, setData] = useState<IData[]>([]);

  const chooseSize = (size: "big" | "small") => {
    setDataSize(size);
  };

  useEffect(() => {
    const getData = async (url: string) => {
      const responce = await fetch(url);
      const data = await responce.json();
      setData(data);
    };
    if (dataSize) {
      setData([]);
      const url = URL_DATA[dataSize];
      getData(url);
      setData;
    }
  }, [dataSize]);

  return (
    <div className={styles.container}>
      <h1>Test tasl for 24 future group</h1>
      <ChoiceSizeData callback={chooseSize} />
      {!data.length && dataSize && <p>Loading...</p>}
      {!!data.length && <Table data={data} />}
    </div>
  );
}

export default App;
