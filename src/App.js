import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'

import { HomePage } from './pages/HomePage/HomePage'
import { MenuPage } from './pages/MenuPage/MenuPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { GalleryPage } from './pages/GalleryPage/GalleryPage'
import { CartPage } from './pages/CartPage/CartPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
