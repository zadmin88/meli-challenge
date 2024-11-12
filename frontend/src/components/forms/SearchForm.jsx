import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../../styles/components/search-form.scss";
import SearchIcon from "../../assets/buttons/ic_Search@2x.png.png";

const SearchForm = () => {
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = async (e) => {
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
    } else {
      setSearchText("");
    }
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={searchInputRef}
        data-testid="search-input"
      />
      <button
        type="submit"
        className="search-button"
        data-testid="search-button"
      >
        <img src={SearchIcon} alt="Search icon" className="search-icon" />
      </button>
    </form>
  );
};

export default SearchForm;
