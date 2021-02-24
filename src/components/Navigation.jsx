import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFilm, faClipboardList, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export const Navigation = ({page, onSelectPage}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navigation">
      <nav className="nav-bar">
        <ul className={"nav-list" + (menuOpen ? " responsive" : "")}>
          <li className={"nav-item-brand"} onClick={() => setMenuOpen(false)}>
            <NavLink exact to="/" className="navigation-link nav-brand-name">
              <BrandLogo />
            </NavLink>
          </li>
          <li className={"nav-item"} onClick={() => setMenuOpen(false)}>
            <NavLink to="/videos" className="navigation-link">
              <FontAwesomeIcon icon={faFilm} size={'1x'} />
              Videos
            </NavLink>
          </li>
          <li className={"nav-item"} onClick={() => setMenuOpen(false)}>
            <NavLink to="/recipies" className="navigation-link">
              <FontAwesomeIcon icon={faClipboardList} size={'1x'} />
              Recipies
            </NavLink>
          </li>
          <li className={"nav-item"} onClick={() => setMenuOpen(false)}>
            <NavLink to="/order" className="navigation-link">
              <FontAwesomeIcon icon={faShoppingBasket} size={'1x'} />
              Order
            </NavLink>
          </li>
          <li className={"nav-toggle icon"} onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={faBars} size={'2x'} />
          </li>
        </ul>
      </nav>
    </header>
  );
};