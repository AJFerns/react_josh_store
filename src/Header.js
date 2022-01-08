import React from "react";
import { useRef, useState } from "react";
import "./Header.css";
import imglogo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { logout, useAuth } from "./firebase";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <div className="header">
      <Link to="/">
        <Slide bottom>
          <img className="header__logo" src={imglogo} />
        </Slide>
      </Link>
      <div className="header__search">
        <Bounce bottom>
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search"
          />
        </Bounce>
        <Roll top>
          <SearchIcon className="header__searchIcon" />
        </Roll>
        {/*logo*/}
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            Hello
            <span className="header__optionLineOne">
              <Rotate top left>
                {!currentUser ? "Guest" : currentUser.email}
              </Rotate>
            </span>
          </div>
        </Link>

        <div
          className="header__option1"
          type="button"
          disabled={loading || !currentUser}
          onClick={handleLogout}
        >
          <span className="header__optionLineTwo">
            <Slide left cascade>
              {currentUser ? "Signout" : "SignUp First"}
            </Slide>
          </span>
        </div>
        <LightSpeed left>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </LightSpeed>
      </div>
    </div>
  );
}

export default Header;
