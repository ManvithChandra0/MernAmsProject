import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../css/LogNavigationBar.module.css';
import { IoIosArrowDown } from "react-icons/io";
import PersonIcon from '@mui/icons-material/Person';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const LogNavigationBar = (props) => {
  var logoStyle =
  {
    position: "relative",
    top: "12%"
  }

  var signStyle =
  {
    position: "relative",
    top: "5px"
  }

  const [activeLink, setActiveLink] = useState(() => {
    if (props.link !== undefined || props.link !== null)
      return props.link
    return 'home';
  });

  const logOut = () => {
    cookie.remove('token')
    window.location.assign("/")
  }

  return (
    <header className={styles["laptop_navigation"]}>
      {/*Top Navigation */}
      <div>
        <div className={styles["top_nav"]} id="top_nav">
          <p className={styles["shipping"]} id="shipping"></p>
          <ul className={styles["account_menu"]} id="account_menu">
            <li className={styles["account"]} id="account">
              <Link className={styles["a_account"]} id="a_account" to="/">My Account<IoIosArrowDown style={logoStyle} /></Link>
              <div>
                <ul className={styles["account_selection"]} id="account_selection">
                  <li><Link to="/profile" className={styles["sign-in"]}><PersonIcon style={signStyle} />Your&nbsp;Profile</Link></li>
                  <li><Link to="" onClick={logOut} className={styles["register"]}><LogoutSharpIcon style={signStyle} />&nbsp;Logout</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*Bottom Navigation */}
      <div>
        <div className={styles["bottom_nav"]} id="bottom_nav">
          <div className={styles["logo"]} style={{ display: "flex", alignItems: "center" }}>
            {}
            <Link to="/">
              <p className={styles["title"]}>
                <span className={styles["ams"]}>Ams</span>
              </p>
            </Link>
          </div>
          <ul className={styles["item_types"]}>
           
           
            <li>
              <Link to="/Automobiles" className={activeLink === 'Automobiles' ? styles['activeLink'] : styles['bottom_element']} onClick={() => setActiveLink('Automobiles')}>
                Accessories
              </Link>
            </li>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <li>
                <Link to="/myCart" className={activeLink === 'cart' ? styles['activeLink'] : styles['bottom_element']} onClick={() => setActiveLink('cart')}>
                  <span>My&nbsp;Cart&nbsp;</span>
                </Link>
              </li>
              <Link to="/myCart">
                <Badge badgeContent={props.cartSize} color="error" max={9}>
                  <ShoppingCartOutlinedIcon className={styles['no-underline']} fontSize='medium' />
                </Badge>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default LogNavigationBar;