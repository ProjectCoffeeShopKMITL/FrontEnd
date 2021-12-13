import styles from './MenuPage.module.css'
import css from 'classnames'
import { Menu } from '../../components/Menu/Menu'

import { CgSearch } from 'react-icons/cg'

import { Select, Input } from 'antd'

import img15 from '../../picture/img15.jpeg'

const dataList = [
  {
    id: 1,
    picture: img15,
    name: 'Latte1',
    rate: 3,
    price: 50,
    salePrice: 40,
  },
  {
    id: 2,
    picture: img15,
    name: 'Latte2',
    rate: 3,
    price: 50,
    salePrice: null,
  },
  {
    id: 3,
    picture: img15,
    name: 'Latte3',
    rate: 3,
    price: 50,
    salePrice: 40,
  },
  {
    id: 4,
    picture: img15,
    name: 'Latte4',
    rate: 3,
    price: 50,
    salePrice: null,
  },
  {
    id: 5,
    picture: img15,
    name: 'Latte5',
    rate: 3,
    price: 50,
    salePrice: null,
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
  )
}
