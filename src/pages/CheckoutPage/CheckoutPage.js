import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import css from 'classnames'
import styles from './CheckoutPage.module.css'

import _ from 'lodash'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import {
  Form,
  Input,
  Divider,
  Row,
  Col,
  Modal,
  notification,
  Button,
} from 'antd'

import { BsArrowLeft } from 'react-icons/bs'

import { useCartContext } from '../../context/CartContext'
import { useUserContext } from '../../context/UserContext'

export function CheckoutPage() {
  const { isLogin, login } = useUserContext()
  const { cartList, setCartList } = useCartContext()
  const { user, saveAddressForGuest } = useUserContext()
  const [orderForm] = Form.useForm()
  const [form] = Form.useForm()

  const history = useHistory()

  const { TextArea } = Input

  // const [isModalVisible, setIsModalVisible] = useState(false)
  // const cancleCheckout = () => {
  //   history.goBack()
  // }

  const { confirm } = Modal
  const showConfirm = () => {
    confirm({
      title: 'Do you want to Cancle?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => history.goBack(),
    })
  }

  const handleOrder = async (formValue) => {
    try {
      await axios.post(process.env.REACT_APP_BACKEND + '/order', {
        ...formValue,
        subtotal: _.sumBy(cartList, 'totalPrice'),
        subtotal: _.sumBy(cartList, 'totalPrice'),
      })
      // notification.success({ message: 'Create Account success' })
    } catch (error) {
      notification.error({ message: 'Order Failed' })
      console.log(error)
    }
  }

  useEffect(() => {
    orderForm.setFieldsValue(_.get(user, 'address[0]', {}))
    // console.log('testttt', user)
  }, [])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.coverArrowBack}>
          <BsArrowLeft
            className={styles.arrowBack}
            onClick={() => {
              history.goBack()
            }}
          />
        </div>
        <div className={styles.textHeader}>CHECK OUT</div>
      </div>

      <div className={styles.cover}>
        <Form
          form={orderForm}
          onFinish={(v) => {
            handleOrder(v)
            const formValue = orderForm.getFieldsValue()
            saveAddressForGuest(formValue)
            history.push('/status')
          }}
        >
          {/* <Form form={orderForm} > */}
          <div className={styles.userData}>
            <div className={styles.section}>Your shipping address</div>
            <div className={styles.coverInput}>
              <div className={styles.coverInputRow1}>
                <Form.Item
                  // noStyle
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: 'please input your First name',
                    },
                  ]}
                >
                  <Input placeholder="First name" allowClear />
                </Form.Item>
                <Form.Item
                  // noStyle
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: 'please input your Last name',
                    },
                  ]}
                >
                  <Input placeholder="Last name" allowClear />
                </Form.Item>
                <Form.Item
                  // noStyle๙
                  name="phone_no"
                  rules={[
                    {
                      required: true,
                      message: 'please input your Phone number',
                    },
                    {
                      max: 10,
                      message: 'Enter no more than 10 ',
                    },
                  ]}
                >
                  <Input placeholder="Phone number" type="number" allowClear />
                </Form.Item>
              </div>
              <div className={styles.address}>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'please input your Address',
                    },
                  ]}
                >
                  <Input placeholder="Address" allowClear />
                </Form.Item>
                <div className={styles.coverSelectAddressButton}>
                  {isLogin ? (
                    <div className={styles.selectAddressActive}>
                      Select Address
                    </div>
                  ) : (
                    <div
                      className={css(
                        styles.notActive,
                        styles.selectAddressActive
                      )}
                    >
                      Select Address
                    </div>
                  )}
                </div>
              </div>
              <Form.Item name="note" noStyle>
                <TextArea
                  rows={4}
                  placeholder="Note"
                  allowClear
                  maxLength={100}
                  showCount
                />
              </Form.Item>
            </div>
          </div>
        </Form>
        <div className={styles.order}>
          <div className={styles.section}>Order</div>
          <div className={styles.coverInOrder}>
            <div className={styles.coverTitle}>
              <div className={styles.titleProduct}>Product</div>
              <div className={styles.titleTotal}>Total</div>
            </div>
            <div>
              {cartList.map((cart, index) => (
                <Fragment key={index}>
                  <div className={styles.menuDetail}>
                    <Row>
                      <Col className={styles.product}>
                        <Row>
                          <div className={styles.name}>{cart.name}</div>
                          {/* <CgClose size={14} /> */}
                          x&nbsp;&nbsp;&nbsp;&nbsp;
                          {cart.quantity}
                        </Row>
                      </Col>
                      <Col className={styles.subTotal}>
                        {cart.totalPrice}&nbsp; Baht
                      </Col>
                    </Row>
                    <Row className={styles.sweet}>sweet&nbsp;{cart.sweet}%</Row>
                    <Row>
                      <div className={styles.note}>Note:</div> &nbsp;&nbsp;
                      {cart.note}
                    </Row>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section}>Payment</div>
          <div className={styles.coverPayment}>
            <div className={styles.payment}>PromptPay</div>
            <div className={styles.payment}>Cash on delivery</div>
            <div className={styles.payment}>Bank Transfer</div>
          </div>
        </div>
        <Divider style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />
        <Row className={styles.coverCartTotal}>
          <Col className={styles.coverTitleCartTotal}>
            <Row>SubTotal : </Row>
            <Row>Shipping : </Row>
            {/* <Row className={styles.line}></Row> */}
            <Row className={styles.total}>Total : </Row>
          </Col>
          <Col className={styles.coverDetailCartTotal}>
            <Row>{_.sumBy(cartList, 'totalPrice')} Baht</Row>
            <Row>20 Baht</Row>
            {/* <Row className={styles.line}></Row> */}
            <Row className={styles.total}>
              {' '}
              {_.sumBy(cartList, 'totalPrice') + 20} Baht
            </Row>
          </Col>
        </Row>
        <Divider style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />
        <div className={styles.coverButton}>
          <div className={styles.buttonCancle} onClick={showConfirm}>
            CANCLE
          </div>
          <div
            className={styles.buttonOrder}
            // onClick={orderForm.submit}
            onClick={() => {
              orderForm.submit()
            }}
          >
            ORDER
          </div>
        </div>
      </div>
    </div>
  )
}
