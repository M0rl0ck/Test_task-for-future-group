import { useRef } from "react";
import FormAddRecord from "./Form/FormAddRecord";
import IData from "../../../infostructure/IData";

interface IAddRecord {
  addData: (data: IData) => void;
}

const AddRecord = ({ addData }: IAddRecord) => {
  const refDialog = useRef<HTMLDialogElement | null>(null);

  const addRecord = (data: IData) => {
    addData(data);
    closeDialog();
  };

  const openDialog = () => {
    refDialog.current?.showModal();
  };
  const closeDialog = () => {
    refDialog.current?.close();
  };
  return (
    <div>
      <button onClick={openDialog}>Добавить запись</button>
      <dialog ref={refDialog}>
        <h2>Новые данные</h2>
        <FormAddRecord addRecord={addRecord} />
        <button onClick={closeDialog}>Закрыть</button>
      </dialog>
    </div>
  );
};

export default AddRecord;
