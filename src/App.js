import './App.css';
import {HomePage} from './pages/homepage/homepage'
import {Route} from 'react-router-dom';
function HatsPage(){
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Route path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
