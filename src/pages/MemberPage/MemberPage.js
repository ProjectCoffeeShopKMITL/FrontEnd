import { useEffect } from 'react'

import styles from './MemberPage.module.css'
import css from 'classnames'
import _ from 'lodash'

import img17 from '../../picture/img17.jpeg'

import { Link } from 'react-router-dom'

import { Form, Tabs, Input } from 'antd'
import { FaRegUserCircle } from 'react-icons/fa'

import { useUserContext } from '../../context/UserContext'

export function MemberPage() {
  const { user, logout } = useUserContext()
  const [form] = Form.useForm()

  const { TabPane } = Tabs

  useEffect(() => {
    form.setFieldsValue(user)
  }, [user])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Member</h4>
      </div>
      <div className={styles.cover}>
        <Form form={form}>
          <div className={styles.profile}>
            <img src={img17} className={styles.imgProfile} />
            <Form.Item name="email" label="username">
              <Input />
            </Form.Item>
            <Form.Item name="firstname" label="First name">
              <Input />
            </Form.Item>
            <Form.Item name="lastname" label="Last name">
              <Input />
            </Form.Item>
            <Form.Item name="phone_no" label="Phone number">
              <Input />
            </Form.Item>
          </div>
          <div className={styles.coverTabs}>
            <Tabs defaultActiveKey="1" type="card" size={'small'}>
              <TabPane tab="Account Setting" key="Account Setting">
                test1
              </TabPane>
              <TabPane tab="Membership" key="Membership">
                test2
              </TabPane>
              <TabPane tab="Address" key="Address">
                test3
              </TabPane>
              <TabPane tab="Billing" key="Billing">
                test4
              </TabPane>
            </Tabs>
          </div>
        </Form>
        <Link to="/" onClick={() => logout()}>
          logout
        </Link>
      </div>
    </div>
  )
}
