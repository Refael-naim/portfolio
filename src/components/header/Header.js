import { Link } from 'react-router-dom';
import './Header.css';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";

import {
  MdMenu
} from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { useEffect, useState } from 'react';

function Header() {

  const [navColour, updateNavbar] = useState(false);
  const [expended, setExpended] = useState(false);

  useEffect(() => {
    scrollHandler();
  }, [expended]);

  useEffect(() => {
    const closeMenu = (evt) => {
      if (evt.target.classList.contains("navigator__link")) {
        setExpended(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20 || expended) updateNavbar(true);
    else updateNavbar(false);
  }

  function menuExpendHandler(){
    setExpended(!expended);
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <header className={`header ${navColour && "header__sticky"}`}>
      <div className='header__container'>
        <Link className='header__brand' to={'/'}>Rn.</Link>
        <nav className={`navigator ${expended && "header__expended"}`}>
          <ul className='navigator__list'>
            <li className='navigator__item'>
              <Link to={'/'} className="navigator__link">
                <AiOutlineHome className="navigator__icon" /> Home
              </Link>
            </li>
            <li className='navigator__item'>
              <Link to={'/about'} className="navigator__link">
                <AiOutlineUser className="navigator__icon" /> About
              </Link>
            </li>
            <li className='navigator__item'>
              <Link to={'/projects'} className="navigator__link">
                <AiOutlineFundProjectionScreen className="navigator__icon" /> Projects
              </Link>
            </li>
            <li className='navigator__item'>
              <Link to={'/resume'} className="navigator__link">
                <CgFileDocument className="navigator__icon" /> Resume
              </Link>
            </li>
          </ul>
        </nav>
        <MdMenu className='header__menu-button' onClick={menuExpendHandler}/>
      </div>
    </header >

  );
}

export default Header;
