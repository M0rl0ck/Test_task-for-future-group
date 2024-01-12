import { useState } from "react";
import IData from "../../infostructure/IData";
import { ColumnName, SortOrder } from "../../constants/arrows";
import styles from "./table.module.css";

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
      <tr>
        <th
          className={columnName === "id" ? styles[order] : ""}
          onClick={() => sort("id")}
        >
          id
        </th>
        <th
          className={columnName === "firstName" ? styles[order] : ""}
          onClick={() => sort("firstName")}
        >
          firstName
        </th>
        <th
          className={columnName === "lastName" ? styles[order] : ""}
          onClick={() => sort("lastName")}
        >
          lastName
        </th>
        <th
          className={columnName === "email" ? styles[order] : ""}
          onClick={() => sort("email")}
        >
          email
        </th>
        <th
          className={columnName === "phone" ? styles[order] : ""}
          onClick={() => sort("phone")}
        >
          phone
        </th>
      </tr>
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
