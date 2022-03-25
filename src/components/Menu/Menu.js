import styles from './Menu.module.css'

import { useHistory } from 'react-router-dom'

import { Rate, Drawer, Radio, Form, InputNumber, Input } from 'antd'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
// import { GrCart } from 'react-icons/gr'
// import { CgShoppingCart } from 'react-icons/cg'

import img17 from '../../picture/img17.jpeg'

export function Menu({ data }) {
  // move to next page
  const history = useHistory()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [form] = Form.useForm()

  const { setCartList } = useCartContext()

  const { TextArea } = Input

  const sweet = [
    { label: '0%', value: 0 },
    { label: '25%', value: 25 },
    { label: '50%', value: 50 },
    { label: '75%', value: 75 },
    { label: '100%', value: 100 },
  ]

  function handleClose() {
    setIsDrawerOpen(false)
    form.resetFields()
  }

  return (
    <>
      <div
        className={styles.container}
        onClick={() => history.push(`/menu/${data.id}`)}
      >
        <div>
          {/* <img src={data.img} className={styles.img} /> */}
          <img src={img17} className={styles.img} />
        </div>
        {data.sale_to !== null && <div className={styles.sale}>sale</div>}

        <div className={styles.coverDetail}>
          <div>
            <span className={styles.name}>{data.name}</span>
            <div className={styles.rateCustom}>
              <Rate disabled defaultValue={data.star} className={styles.star} />
            </div>
            <span className={styles.price}>฿ {data.price}</span>
          </div>
          <div
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation()
              setIsDrawerOpen(true)
            }}
          >
            <div className={styles.icon}>
              <IoCartOutline />
            </div>
            <span className={styles.textButton}>ADD TO CART</span>
          </div>
        </div>
      </div>

      <Drawer
        visible={isDrawerOpen}
        closable={false}
        className={styles.drawerSweet}
        maskClosable={false}
        keyboard={false}
      >
        <Form
          form={form}
          onFinish={(value) => {
            setCartList((oldCartList) => [
              ...oldCartList,
              { ...data, ...value },
            ])
            handleClose()
            console.log(value)
          }}
        >
          <div
            className={styles.closeButton}
            onClick={() => {
              handleClose()
            }}
          >
            <CgClose size={20} />
          </div>

          <div className={styles.titleDrawer}>{data.name}</div>
          <div className={styles.sweet}>
            <div className={styles.header}>Sweet</div>

            <Form.Item
              name="sweet"
              rules={[{ required: true, message: 'please select Sweet' }]}
            >
              <Radio.Group
                options={sweet}
                // onChange={this.onChange4}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>
          </div>
          <div className={styles.line} />
          <div className={styles.inputNumber}>
            <InputNumber
              min={1}
              max={10}
              defaultValue={1}
              style={{ width: '70px' }}
            />
          </div>

          <div>
            <div className={styles.header}>Note</div>
            <TextArea showCount maxLength={100} style={{ height: 120 }} />
          </div>

          <div
            onClick={() => {
              form.submit()
            }}
            className={styles.addToCartButtonDrawer}
          >
            ADD TO CART
          </div>
        </Form>
      </Drawer>
    </>
  )
}
