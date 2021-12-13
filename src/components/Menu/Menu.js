import styles from './Menu.module.css'

import { useHistory } from 'react-router-dom'

import { Rate } from 'antd'
import { IoCartOutline } from 'react-icons/io5'
// import { GrCart } from 'react-icons/gr'
// import { CgShoppingCart } from 'react-icons/cg'

export function Menu({ data }) {
  // move to next page
  const history = useHistory()

  return (
    <div
      className={styles.container}
      onClick={() => history.push(`/menu/${data.id}`)}
    >
      <div>
        <img src={data.picture} className={styles.img} />
      </div>
      {data.salePrice !== null && <div className={styles.sale}>sale</div>}

      <div className={styles.coverDetail}>
        <div>
          <span className={styles.name}>{data.name}</span>
          <div className={styles.rateCustom}>
            <Rate disabled defaultValue={data.rate} className={styles.star} />
          </div>
          <span className={styles.price}>{data.price} Bath</span>
        </div>
        <div className={styles.button}>
          <div className={styles.icon}>
            <IoCartOutline />
          </div>
          <span className={styles.textButton}>ADD TO CART</span>
        </div>
      </div>
    </div>
  )
}
