import { useContext, useState } from "react";
import SearchContext from "../../contexts/searchContext";

import "./filter-select.scss";

const FilterSelect = ({ name, val }) => {
  const { optionsList, handleOptionsList } = useContext(SearchContext);

  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    val.reduce((obj, stock) => ({ ...obj, [stock]: false }), {})
  );

  return (
    <div className="filter-select">
      <button onClick={() => setIsDropdownDisplayed(!isDropdownDisplayed)}>
        {name}
      </button>

      {true && (
        <div className={`options ${isDropdownDisplayed ? "open" : "close"}`}>
          {val.map((option, i) => (
            <div className="option" key={i}>
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedOptions({
                    ...selectedOptions,
                    [option]: e.target.checked,
                  });
                  handleOptionsList(option, e.target.checked);
                }}
                checked={optionsList[option]}
                id={`input-${option.toLowerCase()}`}
              />
              <label htmlFor={`input-${option.toLowerCase()}`}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
