import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import styles from './MemberPage.module.css'
import css from 'classnames'
import _ from 'lodash'

import axios from 'axios'

import { FiLogOut } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import { FiCheck } from 'react-icons/fi'

import {
  Form,
  Tabs,
  Input,
  Avatar,
  Row,
  Col,
  Divider,
  Modal,
  Button,
  Popconfirm,
  Drawer,
  notification,
} from 'antd'
import { FaRegUserCircle } from 'react-icons/fa'

import { useUserContext } from '../../context/UserContext'
import { useCartContext } from '../../context/CartContext'

import profile1 from '../../pictureProfile/avatar1.png'
import profile2 from '../../pictureProfile/avatar2.png'
import profile3 from '../../pictureProfile/avatar3.png'
import profile4 from '../../pictureProfile/avatar4.png'
import profile5 from '../../pictureProfile/avatar5.png'
import profile6 from '../../pictureProfile/avatar6.png'
import profile7 from '../../pictureProfile/avatar7.png'
import profile8 from '../../pictureProfile/avatar8.png'
import profile9 from '../../pictureProfile/avatar9.png'
import profile10 from '../../pictureProfile/avatar10.png'
import profile11 from '../../pictureProfile/avatar11.png'
import profile12 from '../../pictureProfile/avatar12.png'
import profile13 from '../../pictureProfile/avatar13.png'
import profile14 from '../../pictureProfile/avatar14.png'
import profile15 from '../../pictureProfile/avatar15.png'
import profile16 from '../../pictureProfile/avatar16.png'

const profilePic = [
  { id: 1, img: profile1 },
  { id: 2, img: profile2 },
  { id: 3, img: profile3 },
  { id: 4, img: profile4 },
  { id: 5, img: profile5 },
  { id: 6, img: profile6 },
  { id: 7, img: profile7 },
  { id: 8, img: profile8 },
  { id: 9, img: profile9 },
  { id: 10, img: profile10 },
  { id: 11, img: profile11 },
  { id: 12, img: profile12 },
  { id: 13, img: profile13 },
  { id: 14, img: profile14 },
  { id: 15, img: profile15 },
  { id: 16, img: profile16 },
]

export function MemberPage() {
  const { user, logout, saveProfile } = useUserContext()
  const { setCartList } = useCartContext()
  const [orderList, setOrderList] = useState([])
  const [formUpdate] = Form.useForm()
  const history = useHistory()

  const { TabPane } = Tabs
  const { TextArea } = Input

  const [isDrawerOpenEditAddress, setIsDrawerOpenEditAddress] = useState(false)
  const [isDrawerOpenAddAddress, setIsDrawerOpenAddAddress] = useState(false)
  const [editAddressForm] = Form.useForm()
  const [addAddressForm] = Form.useForm()
  const [addrestList, setAddressList] = useState([])

  // const [isModalVisible, setIsModalVisible] = useState(false)
  // const showModal = () => {
  //   setIsModalVisible(true)
  // }
  // const handleCancel = () => {
  //   setIsModalVisible(false)
  // }

  const submitFormUpdateProfile = async (formValue) => {
    try {
      const { data } = await axios.put(
        process.env.REACT_APP_BACKEND + `/members/${formValue.id}`,
        {
          ...formValue,
        }
      )
      setIsDrawerOpenAddAddress(false)
      notification.success({ message: 'Edit Profile Success!' })
      // addAddressForm.resetFields()
      saveProfile(formValue)
    } catch (error) {
      console.log(error)
    }
  }

  const submitFormAddAddress = async (formValue) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND + `/members/${user.id}/addresses`,
        {
          ...formValue,
          is_main: addrestList.length ? false : true,
        }
      )
      setIsDrawerOpenAddAddress(false)
      notification.success({ message: 'Add Address Success!' })
      addAddressForm.resetFields()
      // fetchStocks()
      fetchAddressList()
    } catch (error) {
      console.log(error)
    }
  }
  const submitFormEditAddress = async (formValue) => {
    try {
      const { data } = await axios.put(
        process.env.REACT_APP_BACKEND +
          `/members/${user.id}/addresses/${formValue.id}`,
        {
          ...formValue,
        }
      )
      setIsDrawerOpenEditAddress(false)
      notification.success({ message: 'Edit Address Success!' })
      editAddressForm.resetFields()
      fetchAddressList()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAddress = async () => {
    try {
      const formValue = editAddressForm.getFieldsValue()
      const { data: result } = await axios.delete(
        process.env.REACT_APP_BACKEND +
          `/members/${user.id}/addresses/${formValue.id}`
      )
      setIsDrawerOpenEditAddress(false)
      notification.success({ message: 'Delete menu Success!' })
      editAddressForm.resetFields()
      fetchAddressList()
    } catch (error) {
      console.log(error)
    }
  }

  const setDefault = async (id_address) => {
    try {
      const { data: result } = await axios.post(
        process.env.REACT_APP_BACKEND +
          `/members/${user.id}/addresses/${id_address}/main`
      )
      fetchAddressList()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAddressList = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND + `/members/${user.id}/addresses`
      )
      setAddressList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAddressList()
    formUpdate.setFieldsValue(user)
  }, [user])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Member</h4>
      </div>
      <div className={styles.cover}>
        <Tabs defaultActiveKey="1" type="line" size={'large'}>
          <TabPane tab="Profile" key="Profile">
            <Form
              requiredMark={false}
              form={formUpdate}
              onFinish={(v) => submitFormUpdateProfile(v)}
            >
              <div className={styles.coverLogOut}>
                <Link
                  to="/"
                  onClick={() => {
                    logout()
                    setCartList([])
                  }}
                  className={styles.buttonLogout}
                >
                  <div className={styles.iconLogout}>
                    <FiLogOut />
                  </div>
                  logout
                </Link>
              </div>
              <div className={styles.profile}>
                {/* <div className={styles.coverBlockProfile}>
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                    size={100}
                  />
                  <div
                    className={styles.buttonChooseAvatar}
                    // onClick={showModal}
                  >
                    Choose avatar
                  </div>
                  
                </div> */}
                <div className={styles.coverProfileDetail}>
                  <Form.Item name="id" noStyle />
                  <Form.Item
                    name="firstname"
                    label="First name"
                    rules={[
                      {
                        required: true,
                        message: 'please input your First name',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="lastname"
                    label="Last name"
                    rules={[
                      {
                        required: true,
                        message: 'please input your Last name',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item name="email" label="E-mail">
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    name="phone_no"
                    label="Phone number"
                    rules={[
                      {
                        required: true,
                        message: 'please input your Phone number',
                      },
                      {
                        min: 10,
                        message: 'Enter at least 10 ',
                      },
                      {
                        max: 10,
                        message: 'Enter no more than 10 ',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <div
                    className={styles.buttonSaveData}
                    onClick={() => formUpdate.submit()}
                  >
                    Save
                  </div>
                </div>
              </div>
            </Form>
          </TabPane>

          {/* // NOTE - mapAddress -------------------- */}
          <TabPane tab="Address" key="Address">
            {/* <Divider /> */}
            {addrestList.map((a) => (
              <>
                <div className={styles.address}>
                  <div style={{ width: '100%' }}>
                    <Row gutter={24} style={{ width: '100%' }}>
                      <Col span={4}>
                        <Row justify="start">First name</Row>
                      </Col>
                      <Col span={20} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.firstname}</Row>
                      </Col>
                    </Row>
                    <Row gutter={24} style={{ width: '100%' }}>
                      <Col span={4}>
                        <Row justify="start">Last name</Row>
                      </Col>
                      <Col span={20} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.lastname}</Row>
                      </Col>
                    </Row>
                    <Row gutter={24} style={{ width: '100%' }}>
                      <Col span={4}>
                        <Row justify="start">Phone number</Row>
                      </Col>
                      <Col span={20} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.phone_no}</Row>
                      </Col>
                    </Row>
                    <Row gutter={24} style={{ width: '100%' }}>
                      <Col span={4}>
                        <Row justify="start">Address</Row>
                      </Col>
                      <Col span={20} style={{ marginTop: '-2px ' }}>
                        <Row justify="start">{a.address}</Row>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.function}>
                    <div
                      className={styles.buttonEdit}
                      onClick={() => {
                        setIsDrawerOpenEditAddress(true)
                        editAddressForm.setFieldsValue(a)
                      }}
                    >
                      edit
                    </div>{' '}
                    {a.is_main ? (
                      <div className={styles.buttonSetDefaultDone}>
                        <FiCheck /> Default
                      </div>
                    ) : (
                      <div
                        className={styles.buttonSetDefault}
                        onClick={() => setDefault(a.id)}
                      >
                        Set as default
                      </div>
                    )}
                  </div>
                </div>
                <Divider />
              </>
            ))}

            <Button
              block
              type="dashed"
              style={{ height: '60px' }}
              onClick={() => setIsDrawerOpenAddAddress(true)}
            >
              + Add Address
            </Button>
          </TabPane>
          <TabPane tab="Billing History" key="Billing History">
            <div className={styles.coverContainerOrder}>
              {!orderList.filter((o) => o.status === 4).length ? (
                <div>No Bill</div>
              ) : (
                orderList
                  .filter((o) => o.status === 4)
                  .sort((a, b) => a.id - b.id)
                  .map((order, index) => (
                    <div
                      className={styles.coverOrder}
                      // onClick={() => history.push(`/status/${order.id}`)}
                    >
                      <h2>order# {order.id}</h2>
                      <div>
                        date:{' '}
                        {new Date(order.order_timestamptz).toLocaleDateString(
                          'th-TH',
                          {
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit',
                          }
                        )}
                      </div>
                      <div>
                        time:{' '}
                        {new Date(order.order_timestamptz).toLocaleTimeString(
                          'th-TH',
                          {
                            timeStyle: 'short',
                          }
                        )}
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
                  ))
              )}
            </div>
          </TabPane>
        </Tabs>
      </div>

      {/* add -------------------------------- */}
      <Drawer
        // footer={
        //   <Popconfirm
        //     onConfirm={deleteIngredient}
        //     title="Are you sure?"
        //     okText="Delete"
        //     okButtonProps={{ danger: true }}
        //   >
        //     <Button type="text" danger block>
        //       <FiTrash2
        //         style={{
        //           marginRight: '1rem',
        //           fontSize: '16px',
        //           marginBottom: '-2px',
        //         }}
        //       />
        //       Delete Address
        //     </Button>
        //   </Popconfirm>
        // }
        title={
          <Row justify="space-between" align="middle">
            <Col>Add Address</Col>
            <Col>
              <Button type="primary" onClick={addAddressForm.submit}>
                Add
              </Button>
            </Col>
          </Row>
        }
        visible={isDrawerOpenAddAddress}
        // className={styles.drawerSweet}
        maskClosable={false}
        keyboard={false}
        onClose={() => {
          setIsDrawerOpenAddAddress(false)
        }}
      >
        <Form
          requiredMark={false}
          layout="vertical"
          form={addAddressForm}
          onFinish={(value) => {
            submitFormAddAddress(value)
          }}
        >
          <Form.Item name="id" noStyle />
          <Form.Item
            name="firstname"
            label="First name"
            rules={[
              {
                required: true,
                message: 'please input your First name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Last name"
            rules={[
              {
                required: true,
                message: 'please input your Last name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone_no"
            label="Phone number"
            rules={[
              {
                min: 10,
                message: 'Enter at least 10 ',
              },
              {
                max: 10,
                message: 'Enter no more than 10 ',
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <TextArea maxLength={200} showCount rows={4} />
          </Form.Item>
        </Form>
      </Drawer>

      {/* edit -------------------------------- */}
      <Drawer
        footer={
          <Popconfirm
            onConfirm={deleteAddress}
            title="Are you sure?"
            okText="Delete"
            okButtonProps={{ danger: true }}
          >
            <Button type="text" danger block>
              <FiTrash2
                style={{
                  marginRight: '1rem',
                  fontSize: '16px',
                  marginBottom: '-2px',
                }}
              />
              Delete Address
            </Button>
          </Popconfirm>
        }
        title={
          <Row justify="space-between" align="middle">
            <Col>Edit Address</Col>
            <Col>
              <Button type="primary" onClick={editAddressForm.submit}>
                Save
              </Button>
            </Col>
          </Row>
        }
        visible={isDrawerOpenEditAddress}
        // className={styles.drawerSweet}
        maskClosable={false}
        keyboard={false}
        onClose={() => {
          setIsDrawerOpenEditAddress(false)
        }}
      >
        <Form
          requiredMark={false}
          layout="vertical"
          form={editAddressForm}
          onFinish={(value) => {
            submitFormEditAddress(value)
          }}
        >
          <Form.Item name="id" noStyle />
          <Form.Item
            name="firstname"
            label="First name"
            rules={[
              {
                required: true,
                message: 'please input your First name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Last name"
            rules={[
              {
                required: true,
                message: 'please input your Last name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone_no"
            label="Phone number"
            rules={[
              {
                min: 10,
                message: 'Enter at least 10 ',
              },
              {
                max: 10,
                message: 'Enter no more than 10 ',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <TextArea maxLength={200} showCount rows={4} />
          </Form.Item>
        </Form>
      </Drawer>

      {/* <Modal
        visible={isModalVisible}
        className={styles.modalChooseProfile}
        // width={370}
        footer={null}
        // closable={false}
        maskClosable={true}
        onCancel={handleCancel}
      >
        <div className={styles.coverChooseImgProfile}>
          {profilePic.map((i) => (
            <div
              key={i.id}
              className={styles.imgProfileCard}
              onClick={() => updateProfilePic()}
            >
              <img src={i.img} className={styles.imgProfile} />
            </div>
          ))}
        </div>
      </Modal> */}
    </div>
  )
}
