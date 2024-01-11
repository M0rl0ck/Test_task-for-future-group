interface IChooceSize {
  callback: (size: "big" | "small") => void;
}

const ChoiceSizeData = ({ callback }: IChooceSize) => {
  return (
    <div>
      <h1>Выберите обьем данных</h1>
      <button onClick={() => callback("small")}>Маленький обьем</button>
      <button onClick={() => callback("big")}>Большой обьем</button>
    </div>
  );
};

export default ChoiceSizeData;
