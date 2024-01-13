import styles from "./headTable.module.css";
import { ColumnName, SortOrder } from "../../../constants/TypesTable";

interface ITableHead {
  columnName: ColumnName | null;
  order: SortOrder;
  sort: (column: ColumnName) => void;
}

const HeadTable = ({ columnName, order, sort }: ITableHead) => {
  const getClass = (name: ColumnName) =>
    columnName === name
      ? styles.headCell + " " + styles[order]
      : styles.headCell;

  return (
    <thead>
      <tr>
        <th className={getClass("id")} onClick={() => sort("id")}>
          id
        </th>
        <th className={getClass("firstName")} onClick={() => sort("firstName")}>
          firstName
        </th>
        <th className={getClass("lastName")} onClick={() => sort("lastName")}>
          lastName
        </th>
        <th className={getClass("email")} onClick={() => sort("email")}>
          email
        </th>
        <th className={getClass("phone")} onClick={() => sort("phone")}>
          phone
        </th>
      </tr>
    </thead>
  );
};

export default HeadTable;
