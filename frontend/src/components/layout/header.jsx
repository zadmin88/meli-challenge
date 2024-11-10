import "../../styles/components/header.scss";
import logo from "../../assets/logos/Logo_ML@2x.png.png";
import SearchForm from "../forms/SearchForm";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
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
            onClick={() => navigate("/")}
          />
        </div>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
