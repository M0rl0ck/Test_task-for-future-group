import { useForm, SubmitHandler } from "react-hook-form";
import IData from "../../../../infostructure/IData";
// import IData from "../../../../infostructure/IData";

interface IInputs {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface IFormAddRecord {
  addRecord: (data: IData) => void;
}

const FormAddRecord = ({ addRecord }: IFormAddRecord) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputs>({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    const newRecord: IData = {
      address: {
        city: "",
        state: "",
        streetAddress: "",
        zip: "",
      },
      description: "",
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      id: parseInt(data.id),
      phone: data.phone,
    };
    reset();
    addRecord(newRecord);
  };

  return (
    <>
      <form name="addRecordForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("id", {
            required: "Это обязательное поле",
          })}
          type="number"
          id="id"
          placeholder="Введите id"
        />
        {errors.id && <span>{errors.id.message}</span>}
        <input
          {...register("firstName", { required: "Это обязательное поле" })}
          type="text"
          id="firstName"
          placeholder="Введите имя"
        />{" "}
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input
          {...register("lastName", { required: "Это обязательное поле" })}
          type="text"
          id="lastName"
          placeholder="Введите фамилию"
        />{" "}
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <input
          {...register("email", { required: "Это обязательное поле" })}
          type="email"
          id="email"
          placeholder="Введите email"
        />
        <input
          {...register("phone", { required: "Это обязательное поле" })}
          type="tel"
          id="phone"
          placeholder="Введите телефон"
        />{" "}
        {errors.phone && <span>{errors.phone.message}</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default FormAddRecord;
