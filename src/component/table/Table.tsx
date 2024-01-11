import IData from "../../infostructure/IData";

interface ITableData {
  data: IData[];
}
const Table = ({ data }: ITableData) => {
  return (
    <table>
      <tr>
        <th>id</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>email</th>
        <th>phone</th>
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
