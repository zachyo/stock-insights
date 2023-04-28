import { useContext } from "react";
import FilterSelect from "../../components/filter-select/filter-select";
import SearchBar from "../../components/search-bar/search-bar";
import SearchContext from "../../contexts/searchContext";
import {
  searchFilter,
} from "../../utilities/searchFilter";

import "./homepage.styles.scss";

const Homepage = () => {
  const { searchKey, optionsList, removeAll, removeOne } = useContext(SearchContext);

  let num = 0;
  for (const option in optionsList) {
    if (optionsList[option]) {
      num++;
    }
  }
  let newData;
  if (searchKey) {
    newData = searchFilter(searchKey, newData);
  }
  const optionSelected = Object.keys(optionsList).map((option, i) => {
    if (optionsList[option]) {
      return (
        <span key={i} onClick={() => removeOne(option)}>
          {option} <p>&#10006;</p>
        </span>
      );
    }
  });


  return (
    <div className="homepage">
      <div className="header">
        <h1>Welcome! </h1>
        <p>
          You can ask questions to search through Earnings Calls Transcripts of
          Public Companies!
        </p>
      </div>
      <div className="search_filter">
        <h2>Search Within :</h2>
        <FilterSelect
          name="Select Time"
          val={[
            "Q2 FY23",
            "Q1 FY23",
            "Q4 FY22",
            "Q3 FY22",
            "Q2 FY22",
            "Q1 FY22",
          ]}
        />
        <FilterSelect
          name="Select Stocks"
          val={["OLECTRA", "TATAMOTORS", "ASHOKLEY", "JBMA", "EICHERMOT"]}
        />
      </div>
      <SearchBar children={"Enter any question here"} />
      <div className="selected" style={num === 0 ? { display: "none" } : {}}>
        {optionSelected}
        {num > 1 ? (
          <span onClick={removeAll}>
            Clear All Filters <p>&#10006;</p>
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Homepage;
