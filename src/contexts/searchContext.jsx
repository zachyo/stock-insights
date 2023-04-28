import { useState } from "react";
import { createContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState();
  let filters = [
    "OLECTRA",
    "TATAMOTORS",
    "ASHOKLEY",
    "JBMA",
    "EICHERMOT",
    "Q2 FY23",
    "Q1 FY23",
    "Q4 FY22",
    "Q3 FY22",
    "Q2 FY22",
    "Q1 FY22",
  ];
  const [optionsList, setOptionsList] = useState(
    filters.reduce((obj, stock) => ({ ...obj, [stock]: false }), {})
  );

  //searching system
  const handleSearch = (event) => {
    setSearchKey(event.target.value);
  };
  const handleOptionsList = (option, value) => {
    setOptionsList((optionsList) => ({ ...optionsList, [option]: value }));
  };
  const removeAll = () => {
    filters.map((option) => handleOptionsList(option, false));
  };
  const removeOne = (option) => {
    setOptionsList((optionsList) => ({ ...optionsList, [option]: false }));
  };
  return (
    <SearchContext.Provider
      value={{
        searchKey,
        optionsList,
        handleOptionsList,
        handleSearch,
        removeAll,
        removeOne,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
