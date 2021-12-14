import styles from './MenuDetailPage.module.css'

import { useParams } from 'react-router-dom'

import { FiMinus } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'

import { Carousel, Divider, Rate, Avatar, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import img1 from '../../picture/img1.jpeg'
import img2 from '../../picture/img2.jpg'
import img3 from '../../picture/img3.jpeg'
import img4 from '../../picture/img4.jpeg'
import img8 from '../../picture/img8.jpeg'

export function MenuDetailPage() {
  const { id } = useParams()

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader} />
        <h4 className={styles.textHeader}>DETAIL</h4>
      </div>
      {/* <div>test {id}</div> */}
      {/* NOTE ยิงไปที่ back เพื่อเอาข้อมูลของ id นั้นๆมาเเสดง */}

      <div className={styles.container}>
        <div className={styles.coverDetail}>
          <div className={styles.carouselContainer}>
            <Carousel autoplay autoplaySpeed={5000} draggable>
              <div>
                <img src={img1} className={styles.img} />
              </div>
              <div>
                <img src={img2} className={styles.img} />
              </div>
              <div>
                <img src={img3} className={styles.img} />
              </div>
              <div>
                <img src={img4} className={styles.img} />
              </div>
              <div>
                <img src={img8} className={styles.img} />
              </div>
            </Carousel>
          </div>
          <div className={styles.detail}>
            <span className={styles.name}>Cappuccino</span>
            <div className={styles.coverStars}>
              <div className={styles.rateCustom}>
                <Rate disabled defaultValue={4} className={styles.star} />
              </div>
              <span className={styles.review}>(10 review)</span>
            </div>
            <div className={styles.price}>{40} Bath</div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sem nisl, fringilla at volutpat ac, tristique sit amet lorem.
            </p>
            <Divider />
            <div className={styles.coverCountAndAdd}>
              <div className={styles.coverCount}>
                <FiMinus size={20} />
                <div className={styles.count}>
                  <span>1</span>
                </div>
                <FiPlus size={20} />
              </div>
              <div className={styles.button}>
                <div className={styles.iconCart}>
                  <IoCartOutline />
                </div>
                <span className={styles.textButton}>ADD TO CART</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <Divider />
        </div>
        <div className={styles.coverReview}>
          <span className={styles.headText}>Review</span>
          <div className={styles.inReview}>
            <Avatar size={44} icon={<UserOutlined />} />
          </div>
        </div>
        <div className={styles.coverReview}>
          <span className={styles.headText}>Add a review</span>
          <div className={styles.inWriteReview}>
            <div className={styles.coverClickRate}>
              <span className={styles.clickRate}>your rating</span>
              <div className={styles.rateCustom}>
                <Rate disabled className={styles.star} />
              </div>
            </div>
            <div className={styles.contact}>
              <Input placeholder="Firstname*" className={styles.nameContact} />
              <Input placeholder="Lastname*" className={styles.nameContact} />
              <Input placeholder="Email*" className={styles.mailContact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
