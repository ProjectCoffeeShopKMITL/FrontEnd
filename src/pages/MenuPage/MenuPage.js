import styles from './MenuPage.module.css'
import css from 'classnames'
import { Menu } from '../../components/Menu/Menu'

import { CgSearch } from 'react-icons/cg'

import { Select, Input } from 'antd'

import img7 from '../../picture/img7.jpeg'
import img8 from '../../picture/img8.jpeg'
import img9 from '../../picture/img19.jpeg'
import img13 from '../../picture/img13.jpeg'
import img17 from '../../picture/img17.jpeg'

const dataList = [
  {
    id: 1,
    picture: img7,
    name: 'Latte',
    rate: 3,
    price: 50,
    salePrice: 40,
    review: 20,
  },
  {
    id: 2,
    picture: img8,
    name: 'Cappuccino',
    rate: 2,
    price: 50,
    salePrice: null,
    review: 10,
  },
  {
    id: 3,
    picture: img9,
    name: 'Mocha',
    rate: 5,
    price: 50,
    salePrice: 40,
    review: 30,
  },
  {
    id: 4,
    picture: img13,
    name: 'Americano',
    rate: 4,
    price: 50,
    salePrice: null,
    review: 40,
  },
  {
    id: 5,
    picture: img17,
    name: 'Espresso',
    rate: 3,
    price: 50,
    salePrice: null,
    review: 30,
  },
  {
    id: 6,
    picture: img17,
    name: 'Espresso',
    rate: 1,
    price: 50,
    salePrice: null,
    review: 70,
  },
  {
    id: 7,
    picture: img17,
    name: 'Espresso',
    rate: 5,
    price: 50,
    salePrice: null,
    review: 40,
  },
  {
    id: 8,
    picture: img17,
    name: 'Espresso',
    rate: 2,
    price: 50,
    salePrice: null,
    review: 100,
  },
]

export function MenuPage() {
  const { Option } = Select
  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  const { Search } = Input

  const onSearch = (value) => console.log(value)

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>MENU</h4>
      </div>
      <div className={styles.bgColor}>
        <div className={styles.container}>
          <div className={styles.coverFunction}>
            <Input
              placeholder="search menu"
              prefix={<CgSearch />}
              className={styles.search}
              style={{ width: 300 }}
            />
            <div className={styles.coverFilterAndSort}>
              <Select
                defaultValue="all"
                className={styles.filterFunction}
                onChange={handleChange}
              >
                <Option value="all">All</Option>
                <Option value="coffee">Coffee</Option>
                <Option value="milk">Milk</Option>
                <Option value="soda">Soda</Option>
              </Select>

              <Select
                // defaultValue="low"
                placeholder="Sort by"
                className={styles.sortFunction}
                onChange={handleChange}
              >
                <Option value="low">Price low - high</Option>
                <Option value="high">Price high - low</Option>
                <Option value="recommend">Recommend</Option>
                <Option value="popular">Popularity</Option>
                <Option value="new">Newest</Option>
              </Select>
            </div>
          </div>
          <div className={styles.menuList}>
            {dataList.map((eachData) => (
              <Menu data={eachData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
