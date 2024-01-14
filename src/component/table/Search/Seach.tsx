import { useState } from "react";

interface ISearchProp {
  search: (filter: string) => void;
}

const Seach = ({ search }: ISearchProp) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div>
      <input
        type="search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button onClick={() => search(searchValue)}>Искать</button>
    </div>
  );
};

export default Seach;
