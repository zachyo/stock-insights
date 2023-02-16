import { useContext } from "react";
import SearchContext from "../../contexts/searchContext";

const FilterSelect = () => {
  const { handleGenre, handleRelease } = useContext(SearchContext);

  return (
    <div className="filter-select">
      <select onChange={handleGenre}>
        <option>Filter by Genre </option>
        //list of genres from data
        <option value="genre">Genre</option>
        <option value="release date">Release Date</option>
      </select>
      <select onChange={handleRelease}>
        <option>Filter by release date </option>
        //list of release dates(year) from data
        <option value="genre">Genre</option>
        <option value="release date">Release Date</option>
      </select>
    </div>
  );
};

export default FilterSelect;
