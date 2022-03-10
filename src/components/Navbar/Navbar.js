import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import css from 'classnames'

import { IoCartOutline } from 'react-icons/io5'
import logo from '../../picture/logocoffee.png'
import { useNavbarContext } from '../../context/NavbarContext'

export function Navbar() {
  const { isNavbarOpen, setIsNavbarOpen, isNavbarShowBg, setIsNavbarShowBg } =
    useNavbarContext()

  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    let checkScroll = false

    if (isNavbarOpen) {
      window.onscroll = () => {}
      setIsNavbarShowBg(true)
    } else {
      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar').style.top = '0'
        } else {
          document.getElementById('navbar').style.top = '-70px'
        }
        prevScrollpos = currentScrollPos
        if (currentScrollPos < 230 && !checkScroll) {
          setIsNavbarShowBg(false)
          checkScroll = true
        } else if (currentScrollPos >= 230 && checkScroll) {
          checkScroll = false
          setIsNavbarShowBg(true)
        }
      }
    }
  }, [isNavbarOpen])

  return (
    <nav
      className={css(styles.navbar, {
        [styles.showBg]: isNavbarShowBg,
      })}
      id="navbar"
    >
      <div className={styles.shopName}>
        <img src={logo} alt="Logocoffee" width={45} />
        <NavLink to="/" className={styles.name}>
          COFFEE SHOP
        </NavLink>
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
            <IoCartOutline size={24} />
          </NavLink>
          {/* <div activeClassName={styles.active} className={css(styles.navlink)}>
            <IoCartOutline size={24} />
          </div> */}
        </li>

        <li className={styles.link}>
          <div activeClassName={styles.activeLogin} className={styles.login}>
            LOGIN
          </div>
        </li>
      </ul>

      {/* hambergur */}
      <div
        className={css(styles.hambergurButton, {
          [styles.showX]: isNavbarOpen,
        })}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <div />
        <div />
        <div />
      </div>

      <div
        className={css(styles.menuOverlay, {
          [styles.showNavbar]: isNavbarOpen,
        })}
      >
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

        <li className={css(styles.link, styles.cart)}>
          <NavLink
            to="/cart"
            activeClassName={styles.active}
            className={css(styles.navlink)}
          >
            CART
            <IoCartOutline size={24} className={styles.cartInOverlay} />
          </NavLink>
          {/* <div activeClassName={styles.active} className={css(styles.navlink)}>
            <IoCartOutline size={24} />
          </div> */}
        </li>
      </div>
    </nav>
  )
}
