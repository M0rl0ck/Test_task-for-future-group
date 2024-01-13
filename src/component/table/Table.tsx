import { useState } from "react";
import IData from "../../infostructure/IData";
import {
  ColumnName,
  IPainationState,
  SortOrder,
} from "../../constants/TypesTable";
import HeadTable from "./headTable/HeadTable";
import Paginaton from "./pagination/Paginaton";
// import styles from "./table.module.css";

interface ITableData {
  data: IData[];
  sortData: (column: ColumnName, sortOrder: SortOrder) => void;
}

const MAXITEMS = 50;

const Table = ({ data, sortData }: ITableData) => {
  const [columnName, setColumnName] = useState<ColumnName | null>(null);
  const [order, setOrder] = useState<SortOrder>("ascending");
  const [pagination, setPagination] = useState<IPainationState>({
    start: 0,
    end: Math.min(data.length, MAXITEMS),
    page: 1,
  });

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
    <>
      <table>
        <HeadTable columnName={columnName} order={order} sort={sort} />
        <tbody>
          {data.length &&
            data.slice(pagination.start, pagination.end).map((el) => (
              <tr key={el.phone}>
                <th>{el.id}</th>
                <th>{el.firstName}</th>
                <th>{el.lastName}</th>
                <th>{el.email}</th>
                <th>{el.phone}</th>
              </tr>
            ))}
        </tbody>
      </table>
      <Paginaton
        amount={data.length}
        step={MAXITEMS}
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  );
};

export default Table;
