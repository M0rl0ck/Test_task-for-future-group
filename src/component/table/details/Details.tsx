import IData from "../../../infostructure/IData";

interface IDetails {
  item: IData;
}

const Details = ({ item }: IDetails) => {
  return (
    <div>
      <p>
        Выбран пользователь: {item.firstName} {item.lastName}
      </p>
      <p>Описание:</p>
      <p>{item.description}</p>
      <p>Адрес проживания: {item.address.streetAddress}</p>
      <p>Город: {item.address.city}</p>
      <p>Провинция/штат: {item.address.state}</p>
      <p>Индекс: {item.address.zip}</p>
    </div>
  );
};

export default Details;
