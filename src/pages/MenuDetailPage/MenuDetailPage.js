import styles from './MenuDetailPage.module.css'
import { Menu } from '../../components/Menu/Menu'
import { CoffeeType } from '../../constants'

import { useParams } from 'react-router-dom'
import css from 'classnames'

import { FiMinus } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'

import { Carousel, Divider, Rate, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import img1 from '../../picture/img1.jpeg'
import img2 from '../../picture/img2.jpg'
import img3 from '../../picture/img3.jpeg'
import img4 from '../../picture/img4.jpeg'
import img7 from '../../picture/img7.jpeg'
import img8 from '../../picture/img8.jpeg'
import img9 from '../../picture/img9.jpeg'
import img13 from '../../picture/img13.jpeg'

const dataList = [
  {
    id: 1,
    picture: img7,
    name: 'Latte',
    rate: 3,
    price: 50,
    salePrice: 40,
    review: 20,
    type: CoffeeType.COFFEE,
    isRecommend: true,
    createdAt: '2021-12-14T11:32:40.495Z',
  },
  {
    id: 2,
    picture: img8,
    name: 'Cappuccino',
    rate: 2,
    price: 65,
    salePrice: null,
    review: 10,
    type: CoffeeType.COFFEE,
    isRecommend: false,
    createdAt: '2021-12-14T11:32:40.495Z',
  },
  {
    id: 3,
    picture: img9,
    name: 'Mocha',
    rate: 5,
    price: 55,
    salePrice: 40,
    review: 30,
    type: CoffeeType.COFFEE,
    isRecommend: true,
    createdAt: '2021-12-14T11:32:40.495Z',
  },
  {
    id: 4,
    picture: img13,
    name: 'Americano',
    rate: 4,
    price: 55,
    salePrice: null,
    review: 40,
    type: CoffeeType.MILK,
    isRecommend: true,
    createdAt: '2021-12-14T11:32:40.495Z',
  },
]

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
          <div className={styles.coverHeadText}>
            <span>Review</span>
          </div>
          <div className={styles.inReview}>
            <div className={styles.containerUserReview}>
              <Avatar
                size={44}
                icon={<UserOutlined />}
                className={styles.profile}
              />
              <div className={styles.coverDetailReview}>
                <span>John</span>
                <span className={styles.date}>16.7.2021</span>
                {/* NOTE date add review */}
                <p className={styles.detailReview}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas id ligula at lacus suscipit lacinia. Aliquam commodo
                  orci sed bibendum rutrum.
                </p>
              </div>
              <div className={styles.rateCustom}>
                <Rate
                  disabled
                  defaultValue={4}
                  className={css(styles.star, styles.starReview)}
                />
              </div>
            </div>
            <Divider />
            <div className={styles.containerUserReview}>
              <Avatar
                size={44}
                icon={<UserOutlined />}
                className={styles.profile}
              />
              <div className={styles.coverDetailReview}>
                <span>John</span>
                <span className={styles.date}>16.7.2021</span>
                {/* NOTE date add review */}
                <p className={styles.detailReview}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas id ligula at lacus suscipit lacinia. Aliquam commodo
                  orci sed bibendum rutrum.
                </p>
              </div>
              <div className={styles.rateCustom}>
                <Rate
                  disabled
                  defaultValue={5}
                  className={css(styles.star, styles.starReview)}
                />
              </div>
            </div>
            <Divider />
          </div>
          <div className={styles.coverHeadText}>
            <span>RECOMMEND MENU</span>
          </div>
          <div className={styles.coverMenuList}>
            <div className={styles.menuList}>
              {dataList.map((eachData) => (
                <Menu data={eachData} key={eachData.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
