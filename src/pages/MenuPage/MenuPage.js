import { useState, useEffect } from 'react'
import { CoffeeType } from '../../constants'

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

const { Option } = Select

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
  {
    id: 5,
    picture: img17,
    name: 'Espresso',
    rate: 3,
    price: 50,
    salePrice: null,
    review: 30,
    type: CoffeeType.COFFEE,
    isRecommend: false,
    createdAt: '2021-12-14T11:32:40.495Z',
  },
  {
    id: 6,
    picture: img17,
    name: 'Espresso',
    rate: 1,
    price: 50,
    salePrice: null,
    review: 70,
    type: CoffeeType.SODA,
    isRecommend: false,
    createdAt: '2021-12-14T11:32:40.495Z',
  },
  {
    id: 7,
    picture: img17,
    name: 'Espresso',
    rate: 5,
    price: 60,
    salePrice: null,
    review: 40,
    type: CoffeeType.SODA,
    isRecommend: true,
    createdAt: '2021-12-14T11:32:40.495Z',
  },
  {
    id: 8,
    picture: img17,
    name: 'Espresso',
    rate: 2,
    price: 45,
    salePrice: null,
    review: 100,
    type: CoffeeType.MILK,
    isRecommend: false,
    createdAt: '2021-1-10T11:32:40.495Z',
  },
]

export function MenuPage() {
  const [menuList, setMenuList] = useState(dataList)
  const [searchText, setSearchText] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [sortBy, setSortBy] = useState('recommend')

  const onSearch = () => {
    const result = dataList
      .filter((menu) => (filterBy ? menu.type === filterBy : true)) //filter type
      .filter((menu) =>
        menu.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        //a-b น้อยไปมาก
        switch (sortBy) {
          case 'recommend':
            return b.isRecommend - a.isRecommend
          case 'popular':
            return b.rate - a.rate
          case 'new':
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
          case 'low':
            return a.price - b.price
          case 'high':
            return b.price - a.price
        }
      })
    setMenuList(result)
    console.log(result, 'result')
  }

  useEffect(() => {
    onSearch()
  }, [filterBy, sortBy])

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
              style={{ width: 280 }}
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  onSearch()
                }
              }}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <div className={styles.coverFilterAndSort}>
              <div>
                <span>Filter by</span>
                <Select
                  className={styles.filterFunction}
                  value={filterBy}
                  onChange={(value) => setFilterBy(value)}
                >
                  <Option value="">All</Option>
                  <Option value={CoffeeType.COFFEE}>Coffee</Option>
                  <Option value={CoffeeType.MILK}>Milk</Option>
                  <Option value={CoffeeType.SODA}>Soda</Option>
                </Select>
              </div>

              <div>
                <span>Sort by</span>
                <Select
                  className={styles.sortFunction}
                  value={sortBy}
                  onChange={(value) => setSortBy(value)}
                >
                  <Option value="recommend">Recommend</Option>
                  <Option value="low">Price low - high</Option>
                  <Option value="high">Price high - low</Option>
                  <Option value="popular">Popularity</Option>
                  <Option value="new">Newest</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className={styles.menuList}>
            {menuList.map((eachData) => (
              <Menu data={eachData} key={eachData.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
