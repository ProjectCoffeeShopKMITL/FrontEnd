import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import css from 'classnames'

import { Popover, Row, Col, Divider } from 'antd'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import logo from '../../picture/logocoffee.png'
import { useNavbarContext } from '../../context/NavbarContext'
import { useCartContext } from '../../context/CartContext'

import img17 from '../../picture/img17.jpeg'

export function Navbar() {
  const { cartList } = useCartContext()

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
        if (currentScrollPos < 70 && !checkScroll) {
          setIsNavbarShowBg(false)
          checkScroll = true
        } else if (currentScrollPos >= 70 && checkScroll) {
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
      <div className={styles.loginMobile}>
        <li className={styles.link}>
          <div activeClassName={styles.activeLogin} className={styles.login}>
            LOGIN
          </div>
        </li>
      </div>

      <div className={styles.text}>
        <div className={styles.link}>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            HOME
          </NavLink>
        </div>

        <div className={styles.link}>
          <NavLink
            to="/menu"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            MENU
          </NavLink>
        </div>

        <div className={styles.link}>
          <NavLink
            to="/about"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            ABOUT
          </NavLink>
        </div>

        <div className={styles.link}>
          <NavLink
            to="/gallery"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            GALLERY
          </NavLink>
        </div>
        <div className={styles.divider} />

        <div className={css(styles.link, styles.cart)}>
          <Popover
            title={JSON.stringify(cartList)}
            placement="bottomRight"
            content={cartList.map((cart) => (
              <Row className={styles.popover}>
                {/* <Col span={8}>
                  <img src={img17} />
                </Col> */}
                <Col span={16}>
                  <Row className={styles.popoverRow1}>
                    {cart.name}
                    <CgClose size={20} />
                  </Row>
                  <Row>
                    <span>Sweet:</span>
                    {cart.sweet}
                    <span>Quantity:</span>
                    {cart.quantity}
                  </Row>
                  <Row className={styles.price}>
                    {cart.price}
                    <span>Bath</span>
                  </Row>
                  <Row>
                    <Divider />
                  </Row>
                  <Row>
                    <Col>Total:</Col>
                    <Col>{cart.totalPrice}</Col>
                  </Row>
                </Col>
              </Row>
            ))}
            trigger="hover"
            arrowPointAtCenter
          >
            <NavLink
              to="/cart"
              activeClassName={styles.active}
              className={css(styles.navlink)}
            >
              <IoCartOutline size={24} />
            </NavLink>
          </Popover>

          {/* <div activeClassName={styles.active} className={css(styles.navlink)}>
            <IoCartOutline size={24} />
          </div> */}
        </div>

        <li className={styles.link}>
          <div activeClassName={styles.activeLogin} className={styles.login}>
            LOGIN
          </div>
        </li>
      </div>

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
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            HOME
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/menu"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            MENU
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/about"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            ABOUT
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/gallery"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            GALLERY
          </NavLink>
        </li>

        <li className={css(styles.link, styles.cart)}>
          <NavLink
            to="/cart"
            activeClassName={styles.active}
            className={css(styles.navlinkMobile)}
            onClick={() => setIsNavbarOpen(false)}
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
