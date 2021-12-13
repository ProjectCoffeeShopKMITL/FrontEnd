import styles from './MenuDetailPage.module.css'

import { useParams } from 'react-router-dom'

import { Carousel } from 'antd'

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
          <div className={styles.detail}></div>
        </div>
      </div>
    </div>
  )
}
