import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const handleData = (data) => {
    setData(data);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        handleData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
