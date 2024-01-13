import { useState } from "react";
import IData from "../../infostructure/IData";
import { ColumnName, SortOrder } from "../../constants/arrows";
import HeadTable from "./headTable/HeadTable";
// import styles from "./table.module.css";

interface ITableData {
  data: IData[];
  sortData: (column: ColumnName, sortOrder: SortOrder) => void;
}

const Table = ({ data, sortData }: ITableData) => {
  const [columnName, setColumnName] = useState<ColumnName | null>(null);
  const [order, setOrder] = useState<SortOrder>("ascending");

  const sort = (column: ColumnName) => {
    let newOrder: SortOrder = "ascending";
    if (columnName === column) {
      newOrder = order === "ascending" ? "descending" : "ascending";
    } else {
      newOrder = "ascending";
    }
    setColumnName(column);
    setOrder(newOrder);
    sortData(column, newOrder);
  };

  return (
    <table>
      <HeadTable columnName={columnName} order={order} sort={sort} />
      {data.length &&
        data.map((el) => (
          <tr>
            <th>{el.id}</th>
            <th>{el.firstName}</th>
            <th>{el.lastName}</th>
            <th>{el.email}</th>
            <th>{el.phone}</th>
          </tr>
        ))}
    </table>
  );
};

export default Table;
