import { useState } from "react";
import styles from "./App.module.css";
import ChoiceSizeData from "./component/ChoiceSizeData/ChoiceSizeData";
import { SizeData, URL_DATA } from "./constants/urls";
import Table from "./component/table/Table";
import useGetData from "./hooks/useGetData";

function App() {
  const [dataSize, setDataSize] = useState<SizeData | null>(null);
  const { data, error, isLoading } = useGetData(
    dataSize ? URL_DATA[dataSize] : ""
  );

  const chooseSize = (size: SizeData) => {
    setDataSize(size);
  };

  return (
    <div className={styles.container}>
      <h1>Test tasl for 24 future group</h1>
      <ChoiceSizeData callback={chooseSize} />
      {isLoading && <p>Loading...</p>}
      {!!data.length && <Table data={data} />}
      {error && <p>Ошибка загрузки: {error.message}</p>}
    </div>
  );
}

export default App;
