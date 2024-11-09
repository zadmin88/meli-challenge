import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../../styles/components/search-form.scss";
import SearchIcon from "../../assets/buttons/ic_Search@2x.png.png";

const SearchForm = () => {
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      searchInputRef.current?.focus();
      return;
    }
    navigate(`/items?search=${searchText}`);
  };

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchText(searchParam);
    }
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit} className="searchContainer">
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className="searchInput"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={searchInputRef}
      />
      <button type="submit" className="searchButton">
        <img src={SearchIcon} alt="Search icon" className="searchIcon" />
      </button>
    </form>
  );
};

export default SearchForm;
