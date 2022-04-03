import styles from './CartPage.module.css'
import css from 'classnames'

import { Table, Form, InputNumber, Input, Select } from 'antd'
import { CgClose } from 'react-icons/cg'

import { useCartContext } from '../../context/CartContext'

export function CartPage() {
  const { cartList, setCartList } = useCartContext()
  const [form] = Form.useForm()

  const columns = [
    {
      title: 'Product',
      render: ({ name, listAction, ...rest }) => (
        <div className={styles.detail}>
          <Form.Item name={[name, 'name']} noStyle {...rest}>
            <Input bordered={false} style={{ pointerEvents: 'none' }} />
          </Form.Item>
        </div>
      ),
      key: 'product',
    },
    {
      title: 'Price',
      width: '10%',
      render: ({ name, listAction, ...rest }) => (
        <div className={styles.inputNumber}>
          <Form.Item name={[name, 'price']} noStyle {...rest}>
            <Input bordered={false} />
          </Form.Item>
        </div>
      ),
      key: 'price',
    },
    {
      title: 'Quantity',
      render: ({ name, listAction, ...rest }) => (
        <div className={styles.inputNumber}>
          <Form.Item name={[name, 'quantity']} noStyle {...rest}>
            <InputNumber min={1} max={10} style={{ width: '70px' }} />
          </Form.Item>
        </div>
      ),
      key: 'name',
    },
    {
      title: 'Sweet',
      width: '10%',
      render: ({ name, listAction, ...rest }) => (
        <div className={styles.inputNumber}>
          <Form.Item name={[name, 'sweet']} noStyle {...rest}>
            {/* <Input bordered={false} /> */}
            <Select
              options={[
                { value: 0, label: '0%' },
                { value: 25, label: '25%' },
                { value: 50, label: '50%' },
                { value: 75, label: '75%' },
                { value: 100, label: '100%' },
              ]}
            />
          </Form.Item>
        </div>
      ),
      key: 'sweet',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      // title: 'close',
      render: ({ name, listAction, ...rest }) => (
        // render: (a) => (
        <div
          className={styles.inputNumber}
          onClick={() => listAction.remove(name)}
        >
          <div className={styles.closeButton}>
            <CgClose size={20} />
          </div>
        </div>
      ),
      key: 'close',
    },
  ]

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>CART</h4>
      </div>
      <div className={styles.coverTable}>
        <Form
          form={form}
          onFieldsChange={() => {
            const formValue = form.getFieldsValue()
            setCartList(formValue.cartList)
          }}
        >
          <Form.List name="cartList" initialValue={cartList}>
            {(fields, listAction) => (
              <>
                <Table
                  dataSource={fields.map((field) => ({ ...field, listAction }))}
                  columns={columns}
                  pagination={false}
                />
                {/* <button
                  onClick={() =>
                    listAction.add({
                      id: 1,
                      name: 'latte mockup',
                      price: 34,
                      sweet: 50,
                      quantity: 2,
                    })
                  }
                >
                  add
                </button> */}
              </>
            )}
          </Form.List>
        </Form>
      </div>
      {/* <button onClick={() => console.log(form.getFieldsValue())}>test</button> */}
    </div>
  )
}
