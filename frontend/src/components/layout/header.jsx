import "../../styles/components/header.scss";

import logo from "../../assets/logos/Logo_ML@2x.png.png";
import SearchIcon from "../../assets/buttons/ic_Search@2x.png.png";

function Header() {
  return (
    <header className={"header"}>
      <div className={"container"}>
        <div className={"logo"}>
          <img
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className={"logoImage"}
          />
        </div>
        <div className={"searchContainer"}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            className={"searchInput"}
          />
          <button className={"searchButton"}>
            <img src={SearchIcon} alt="Search icon" className={"searchIcon"} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
