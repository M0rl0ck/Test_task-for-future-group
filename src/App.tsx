import { useEffect, useState } from "react";
import styles from "./App.module.css";
import ChoiceSizeData from "./component/ChoiceSizeData/ChoiceSizeData";
import { SizeData, URL_DATA } from "./constants/urls";
import IData from "./infostructure/IData";
import Table from "./component/table/Table";
import { ColumnName, SortOrder } from "./constants/TypesTable";

function App() {
  const [dataSize, setDataSize] = useState<SizeData | null>(null);
  const [data, setData] = useState<IData[]>([]);

  const chooseSize = (size: SizeData) => {
    setDataSize(size);
  };

  const sortData = (column: ColumnName, sortOrder: SortOrder) => {
    const sortedData = [...data];
    if (column === "id") {
      sortedData.sort((a, b) =>
        sortOrder === "ascending" ? a.id - b.id : b.id - a.id
      );
    } else {
      sortedData.sort((a, b) => {
        if (sortOrder === "ascending") {
          return a[column] < b[column] ? -1 : 1;
        }
        return a[column] > b[column] ? -1 : 1;
      });
    }

    setData(sortedData);
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
      {!!data.length && <Table data={data} sortData={sortData} />}
    </div>
  );
}

export default App;
