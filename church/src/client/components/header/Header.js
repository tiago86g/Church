import React, { useState } from 'react';
import './header.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CloseMenu } from '../../assets/close-menu.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="nav">
        <div logo-container>
          <a href="/" alt="">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/moeze-ha" alt="Moeze ha">
              <p>Moeze Ha</p>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/khane-sorod" alt="Khane sorod">
              <p>Khane sorod</p>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/kanon-e-shadi" alt="Kanon e shadi">
              <p>Kanon e shadi</p>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/akhbar" alt="Akhbar">
              <p>Akhbar</p>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/khanevade" alt="Khanevade">
              <p>Khanevade</p>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/javanan" alt="Javanan">
              <p>Javanan</p>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/dar-bare-ma" alt="Dar bare ma">
              <p>Dar bare ma</p>
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/faaliat-ha" alt="Faaliat ha">
              <p>Faaliat ha</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
}
