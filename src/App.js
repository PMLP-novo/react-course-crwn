import './App.css';
import React from 'react'
import {HomePage} from './pages/homepage/homepage'
import {ShopPage} from './pages/shop/shop'
import SignInOrUp from './pages/SignInOrUp'
import Header from './components/Header'
import {Route} from 'react-router-dom';
import {auth, createUserprofileDocument} from './firebase/firebase.utils'


class App extends React.Component{
  constructor(){
    super()
    this.state = {currentUser:null}
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserprofileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{this.setState({
          currentUser:{id:snapShot.id, ...snapShot.data()}
        })})
      }
      this.setState({currentUser:userAuth})
    }
    )
  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render (){
    return (<div>
      <Header currentUser={this.state.currentUser}/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInOrUp}/>
    </div>)

  }

}

export default App;
