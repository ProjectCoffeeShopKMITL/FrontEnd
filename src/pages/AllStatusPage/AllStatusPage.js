import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './AllStatusPage.module.css'

import axios from 'axios'
import { Row, Col, Divider } from 'antd'

import { useUserContext } from '../../context/UserContext'

export function AllStatusPage() {
  const { user, isUserLoaded } = useUserContext()
  const [orderList, setOrderList] = useState([])
  const history = useHistory()

  const fetchOrderList = async () => {
    try {
      const firstname = user.firstname || user.address[0].firstname
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND + `/orders/${firstname}`
      )
      setOrderList(data)
      console.log('orderList', data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (isUserLoaded) {
      fetchOrderList()
    }
  }, [isUserLoaded])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>STATUS</h4>
      </div>
      <div className={styles.cover}>
        {orderList.map((order, index) => (
          <div
            className={styles.coverOrder}
            onClick={() => history.push(`/status/${order.id}`)}
          >
            <h2>order# {order.id}</h2>
            <div>
              date:{' '}
              {new Date(order.order_timestamptz).toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </div>
            <div>
              time:{' '}
              {new Date(order.order_timestamptz).toLocaleTimeString('th-TH', {
                timeStyle: 'short',
              })}
            </div>
            <div>address: {order.address}</div>
            <br />

            <Row>
              <Col span={8}>Product</Col>
              <Col span={8}>
                <Row justify="center">Quantity</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">Subtotal</Row>
              </Col>
            </Row>
            {order.menu_array.map((menu) => (
              <Row>
                <Col span={8}>{menu.name}</Col>
                <Col span={8}>
                  <Row justify="center">{menu.quantity}</Row>
                </Col>
                <Col span={8}>
                  <Row justify="end">{menu.sale_to}</Row>
                </Col>
              </Row>
            ))}
            <br />
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Subtotal</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">{order.subtotal}</Row>
              </Col>
            </Row>
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Discount</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">{order.discount}</Row>
              </Col>
            </Row>
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Shipping</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">20.00</Row>
              </Col>
            </Row>
            <Divider style={{ margin: '1rem' }} />
            <Row>
              <Col span={8}></Col>
              <Col span={8}>
                <Row justify="center">Total</Row>
              </Col>
              <Col span={8}>
                <Row justify="end">{order.total}</Row>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  )
}
