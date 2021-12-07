import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import css from 'classnames'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from '../../picture/logocoffee.png'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.shopName}>
        <img src={logo} alt="Logocoffee" width={45} />
        <NavLink to="/">COFFEE SHOP</NavLink>
      </div>
      <ul className={styles.text}>
        <li className={styles.link}>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            HOME
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/menu"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            MENU
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/about"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            ABOUT
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/gallery"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            GALLERY
          </NavLink>
        </li>
        <div className={styles.divider} />

        <li className={css(styles.link, styles.cart)}>
          <NavLink
            to="/cart"
            activeClassName={styles.active}
            className={css(styles.navlink)}
          >
            <AiOutlineShoppingCart size={24} />
          </NavLink>
        </li>

        <li className={styles.link}>
          <div activeClassName={styles.activeLogin} className={styles.login}>
            LOGIN
          </div>
        </li>
      </ul>
    </nav>
  )
}
