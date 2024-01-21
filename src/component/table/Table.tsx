import { useEffect, useState } from "react";
import IData from "../../infostructure/IData";
import {
  ColumnName,
  IPainationState,
  SortOrder,
} from "../../constants/TypesTable";
import HeadTable from "./headTable/HeadTable";
import Paginaton from "./pagination/Paginaton";
import Seach from "./Search/Seach";
import Details from "./details/Details";
import AddRecord from "./addRecord/AddRecord";
// import styles from "./table.module.css";

interface ITableData {
  data: IData[];
}

const MAXITEMS = 50;

const Table = ({ data }: ITableData) => {
  const [addedData, setAddedData] = useState<IData[]>([]);
  const [viewData, setViewData] = useState<IData[]>(data);
  const [filter, setFilter] = useState<string>("");
  const [columnName, setColumnName] = useState<ColumnName | null>(null);
  const [order, setOrder] = useState<SortOrder>("ascending");
  const [pagination, setPagination] = useState<IPainationState>({
    start: 0,
    end: Math.min(viewData.length, MAXITEMS),
    page: 1,
  });
  const [detail, setDetail] = useState<IData | null>(null);

  const addData = (data: IData) => {
    setAddedData((prev) => [...prev, data]);
  };

  useEffect(() => {
    const sortData = (data: IData[]) => {
      const sortedData = [...data];
      if (!columnName) {
        return sortedData;
      }
      if (columnName === "id") {
        sortedData.sort((a, b) =>
          order === "ascending" ? a.id - b.id : b.id - a.id
        );
      } else {
        sortedData.sort((a, b) => {
          if (order === "ascending") {
            return a[columnName] < b[columnName] ? -1 : 1;
          }
          return a[columnName] > b[columnName] ? -1 : 1;
        });
      }

      return sortedData;
    };

    const filterData = (el: IData) => {
      if (filter === "") {
        return true;
      }
      if (
        el.id.toString().includes(filter) ||
        el.firstName.includes(filter) ||
        el.lastName.includes(filter) ||
        el.email.includes(filter) ||
        el.phone.includes(filter)
      ) {
        return true;
      }
      return false;
    };

    setViewData(
      sortData([...data, ...addedData]).filter((el) => filterData(el))
    );
  }, [addedData, columnName, data, filter, order]);

  useEffect(() => {
    setPagination({
      start: 0,
      end: Math.min(viewData.length, MAXITEMS),
      page: 1,
    });
  }, [viewData]);

  const sort = (column: ColumnName) => {
    let newOrder: SortOrder = "ascending";
    if (columnName === column) {
      newOrder = order === "ascending" ? "descending" : "ascending";
    } else {
      newOrder = "ascending";
    }
    setColumnName(column);
    setOrder(newOrder);
  };

  return (
    <>
      <Seach search={setFilter} />
      <AddRecord addData={addData} />
      <table>
        <HeadTable columnName={columnName} order={order} sort={sort} />
        <tbody>
          {data.length &&
            viewData.slice(pagination.start, pagination.end).map((el) => (
              <tr
                key={el.phone}
                onClick={() => {
                  setDetail(el);
                }}
              >
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
        amount={viewData.length}
        step={MAXITEMS}
        pagination={pagination}
        setPagination={setPagination}
      />

      {!!detail && <Details item={detail} />}
    </>
  );
};

export default Table;
