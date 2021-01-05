import './App.css';
import {HomePage} from './pages/homepage/homepage'
import {ShopPage} from './pages/shop/shop'
import Header from './components/Header'
import {Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
