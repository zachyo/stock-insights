
import searchIcon from "../../assets/searchIcon.svg";
import "./search-bar.scss";

const SearchBar = ({ children }) => {

  return (
    <div className="search-bar">
      <img src={searchIcon} alt="" />
      <input type="text" placeholder={children} />
    </div>
  );
};

export default SearchBar;
