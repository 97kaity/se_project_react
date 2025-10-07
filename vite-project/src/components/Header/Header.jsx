import "./Header.css";
import headerLogo from "../assets/Logo.svg";
import avatar from "../assets/avatar.svg";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button className="header__add-clothes-button">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
