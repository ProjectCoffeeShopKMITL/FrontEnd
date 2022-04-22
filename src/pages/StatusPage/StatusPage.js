import styles from './StatusPage.module.css'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import _ from 'lodash'

import img17 from '../../picture/img17.jpeg'

import { Form, Steps, Input, Divider, Row, Col } from 'antd'
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'

import { useCartContext } from '../../context/CartContext'
// import { nanoid } from 'nanoid'

export function StatusPage() {
  const { cartList, setCartList } = useCartContext()
  const [form] = Form.useForm()

  const { Step } = Steps

  const history = useHistory()

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
        <div className={styles.textHeader}>STATUS</div>
      </div>
      <div className={styles.cover}>
        <Form form={form}>
          <div className={styles.step}>
            <Steps size="small" current={2}>
              <Step title="Order Placed" />
              <Step title="Processing" />
              <Step title="Shipping" />
              <Step title="deliverd" />
            </Steps>
          </div>

          <div className={styles.dividerMobile} />
          {/* <Divider
            className={styles.divider}
            style={{ borderWidth: 1, borderColor: '#e0e0e0' }}
          /> */}
          <div className={styles.coverRow1}>
            <div className={styles.totalPrice}>
              <div>Purchased Items {_.sumBy(cartList, 'quantity')}</div>
              <div className={styles.price}>
                {_.sumBy(cartList, 'totalPrice')}&nbsp;&nbsp; Baht
              </div>
            </div>
            <div className={styles.orderIDAndDetail}>
              <div className={styles.orderID}>order #</div>
              <div className={styles.drawerDetail}>Detail</div>
            </div>
          </div>
          <div className={styles.coverMenuList}>
            {cartList.map((cart, index) => (
              <Fragment key={index}>
                <div className={styles.menuCard}>
                  <img src={img17} className={styles.img} />
                  <div className={styles.menuDetail}>
                    <Col>
                      <Row>
                        <Col>
                          {cart.name}
                          &nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;
                        </Col>
                        <Col>{cart.quantity}</Col>
                      </Row>
                      <Row className={styles.sweet}>
                        <Col>sweet&nbsp;&nbsp;</Col>
                        <Col>{cart.sweet}</Col>
                      </Row>
                      <Row className={styles.priceMenuList}>
                        <Col>{cart.totalPrice}&nbsp;&nbsp;</Col>
                        <Col>Baht</Col>
                      </Row>
                      <Row className={styles.note}>
                        <Col>
                          <i>note: &nbsp;</i>
                        </Col>
                        <Col>{cart.note}</Col>
                      </Row>
                    </Col>
                    {/* <Row>
                      <Col className={styles.product}>
                        <Row>
                          <div className={styles.name}>
                            {cart.name}&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
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
                    </Row> */}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className={styles.reviewButton}></div>
        </Form>
      </div>
    </div>
  )
}
