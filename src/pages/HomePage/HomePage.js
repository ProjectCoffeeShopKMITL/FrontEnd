import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div>
      <Link to="/menu">
        <button>test</button>
      </Link>
      <p>HomePage</p>
    </div>
  )
}
