import styles from './Menu.module.css'

import { useHistory } from 'react-router-dom'

export function Menu({ data }) {
  // move to next page
  const history = useHistory()

  return (
    <div onClick={() => history.push(`/menu/${data.id}`)}>
      <img src={data.picture} />
      <div>{data.name}</div>
      <div>{data.price}</div>
    </div>
  )
}
