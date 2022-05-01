import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import css from 'classnames'
import styles from './CheckoutPage.module.css'

import _, { add } from 'lodash'
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
  const { cartList, setCartList } = useCartContext()
  const { user, saveAddressForGuest, isLogin } = useUserContext()
  const [orderForm, form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [addressList, setAddressList] = useState([])

  const history = useHistory()

  const { TextArea } = Input

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

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
      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND + '/order',
        {
          ...formValue,
          subtotal: _.sumBy(cartList, 'totalPrice'),
          shipping: isLogin ? 10 : 20,
          discount: _.sumBy(
            cartList,
            (c) => (parseFloat(c.price) - parseFloat(c.sale_to)) * c.quantity
          ),
          total: _.sumBy(cartList, 'totalPrice') + (isLogin ? 10 : 20),
          menu_array: cartList.map((c) => [
            String(c.id),
            String(c.quantity),
            c.note,
          ]),
          member_id: user.id,
        }
      )
      if (!addressList.length && isLogin) {
        await axios.post(
          process.env.REACT_APP_BACKEND + `/members/${user.id}/addresses`,
          {
            ...formValue,
            is_main: true,
          }
        )
      }
      setCartList([])

      if (isLogin) {
      } else {
        saveAddressForGuest(formValue)
      }
      history.push(`/status/${data.id}`)
      notification.success({ message: 'Order Success' })
    } catch (error) {
      notification.error({ message: 'Order Failed' })
      console.log(error)
    }
  }

  const setDefaultAddress = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND + `/members/${user.id}/addresses`
      )
      setAddressList(data)
      const address = data.find((d) => d.is_main)
      if (address) {
        orderForm.setFieldsValue(address)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isLogin) {
      setDefaultAddress()
    } else {
      orderForm.setFieldsValue(_.get(user, 'address[0]', {}))
    }
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
            // const formValue = orderForm.getFieldsValue()
            // if (isLogin) {
            //   saveAddressForMember(formValue)
            // } else saveAddressForGuest(formValue)
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
                  // noStyle
                  name="phone_no"
                  rules={[
                    {
                      required: true,
                      message: 'please input your Phone number',
                    },
                    {
                      pattern: new RegExp(/^\d{10}$/),
                      message: 'please input number only',
                    },
                  ]}
                >
                  <Input placeholder="Phone number" allowClear />
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
                    <div
                      className={styles.selectAddressActive}
                      onClick={showModal}
                    >
                      Select Address
                    </div>
                  ) : (
                    <div className={css(styles.notActive)}>Select Address</div>
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
                  <Row className={styles.menuDetail}>
                    <Col span={10}>
                      <Row>{cart.name}</Row>
                      <Row className={styles.sweet}>
                        sweet&nbsp;&nbsp;{cart.sweet}
                      </Row>
                    </Col>
                    <Col span={10}>x{cart.quantity}</Col>
                    <Col span={4}>
                      <Row justify="end">{cart.totalPrice} Baht</Row>
                      {/* {cart.totalPrice}&nbsp;&nbsp; Baht */}
                    </Col>
                    <Col>
                      <Row>
                        <div className={styles.note}>Note:</div> &nbsp;&nbsp;
                        {cart.note}
                      </Row>
                    </Col>
                  </Row>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.section}>Payment</div>
          <div className={styles.coverPayment}>
            {/* <div className={styles.payment}>PromptPay</div> */}
            <div className={styles.payment}>Cash on delivery</div>
            {/* <div className={styles.payment}>Bank Transfer</div> */}
          </div>
        </div>
        {/* {JSON.stringify(cartList)} */}
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
            <Row>{cartList.length ? (isLogin ? 10 : 20) : 0} Baht</Row>
            {/* <Row className={styles.line}></Row> */}
            <Row className={styles.total}>
              {' '}
              {_.sumBy(cartList, 'totalPrice') +
                (cartList.length ? (isLogin ? 10 : 20) : 0)}{' '}
              Baht
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
      <Modal
        visible={isModalVisible}
        width={400}
        footer={null}
        // closable={false}
        maskClosable={true}
        onCancel={handleCancel}
        title="My Address"
      >
        <Form>
          <div className={styles.coverSelectAddress}>
            {addressList.map((a) => (
              <>
                <div className={styles.selectAddress}>
                  <div>
                    <Row style={{ width: '100%', marginBottom: '4px' }}>
                      <Col span={10}>
                        <Row justify="start">First name</Row>
                      </Col>
                      <Col span={10} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.firstname}</Row>
                      </Col>
                    </Row>

                    <Row style={{ width: '100%', marginBottom: '4px' }}>
                      <Col span={10}>
                        <Row justify="start">Last name</Row>
                      </Col>
                      <Col span={10} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.lastname}</Row>
                      </Col>
                    </Row>
                    <Row style={{ width: '100%', marginBottom: '4px' }}>
                      <Col span={10}>
                        <Row justify="start">Phone number</Row>
                      </Col>
                      <Col span={10} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.phone_no}</Row>
                      </Col>
                    </Row>
                    <Row style={{ width: '100%', marginBottom: '4px' }}>
                      <Col span={10}>
                        <Row justify="start">Address</Row>
                      </Col>
                      <Col span={14} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.address}</Row>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.function}>
                    <div
                      className={styles.buttonSelectAddress}
                      onClick={() => {
                        orderForm.setFieldsValue(a)
                        setIsModalVisible(false)
                      }}
                    >
                      Select
                    </div>
                  </div>
                </div>
                <Divider style={{ marginTop: '10px' }} />
              </>
            ))}
          </div>
        </Form>
      </Modal>
    </div>
  )
}
