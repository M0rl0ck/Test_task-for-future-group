import { IPainationState } from "../../../constants/TypesTable";

interface IPagination {
  amount: number;
  step: number;
  pagination: IPainationState;
  setPagination: (x: IPainationState) => void;
}

const Paginaton = ({
  amount,
  step,
  pagination,
  setPagination,
}: IPagination) => {
  const prev = () => {
    const newPagination: IPainationState = {
      start: Math.max(0, pagination.start - step),
      end: Math.max(0, pagination.end - step),
      page: pagination.page - 1,
    };
    setPagination(newPagination);
  };
  const next = () => {
    const newPagination: IPainationState = {
      start: pagination.start + step,
      end: Math.min(amount, pagination.end + step),
      page: pagination.page + 1,
    };
    setPagination(newPagination);
  };

  return (
    <div>
      <button disabled={pagination.start <= 0} onClick={prev}>
        Назад
      </button>
      <span>{pagination.page}</span>
      <button disabled={pagination.end >= amount} onClick={next}>
        Дальше
      </button>
    </div>
  );
};

export default Paginaton;
