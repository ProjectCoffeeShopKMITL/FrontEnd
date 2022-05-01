import styles from './AboutPage.module.css'
import css from 'classnames'

import { Divider } from 'antd'

import { FiFacebook } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'

import imgProfile from '../../picture/imgprofile.jpeg'
import imgShop from '../../picture/img2.jpg'

export function AboutPage() {
  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>ABOUT US</h4>
      </div>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.topBox}>
            <img src={imgProfile} className={styles.imgProfile} />
            <div className={styles.topBoxContainer}>
              <div className={styles.coverHeadText}>
                <span className={styles.headText}>Our Team</span>
              </div>
              <div className={styles.coverParagraph}>
                <p>
                  We are a team of dedicated coffee fans who celebrate
                  exceptional coffee brands and roasters by providing our guests
                  the unique opportunity to try coffee drinks of the highest
                  quality.
                </p>
              </div>
              <div className={styles.coverCaption}>
                <span>Coffee knows how to heal my loneliness.</span>
              </div>
              <div className={styles.coverParagraph}>
                <p>
                  The coffee shop website theme kills the distance dividing you
                  and your customers. Compact and up-to-date website template
                  with discreet architecture and intuitive navigation will help
                  in creating an internet site that deals with coffee bar or
                  coffee shop. If you have any questions concerning website
                  design usage you can take a look at detailed documentation,
                  also you receive 24/7 priority assistance aiding to respond to
                  any problem.
                </p>
              </div>
              <div className={styles.contactContainer}>
                {/* <FiFacebook className={styles.icon} />
                <FiInstagram className={styles.icon} /> */}
                <FiMail className={styles.icon} />
                <span className={styles.textInContact}>
                  Coffeeshop@gmail.com
                </span>
                <FiPhone className={styles.icon} />
                <span className={styles.textInContact}>123-456-7890</span>
              </div>
            </div>
          </div>
          <Divider />
          <div className={styles.bottomBox}>
            <div className={styles.bottomBoxContainer}>
              <div className={styles.coverHeadTextOurShop}>
                <span className={styles.headText}>OUR SHOP</span>
              </div>
              <div className={styles.coverParagraph}>
                <p>
                  Whenever you feel like a cup of coffee with your name spelled
                  wrong on it wouldn’t do, feel free to visit this e-store. We
                  have the best coffee machines online!
                </p>
              </div>
            </div>
            <img src={imgShop} className={styles.imgShop} />
          </div>
        </div>
      </div>
    </div>
  )
}
