import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {HomePage} from './pages/HomePage/HomePage'
import {MenuPage} from './pages/MenuPage/MenuPage'

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Route path='/menu' component={MenuPage}/>
        {/* <Route path='/home' component={AboutUsPage}/>
        <Route path='/home' component={CartPage}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
