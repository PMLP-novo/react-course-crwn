import './App.css';
import React from 'react'
import {HomePage} from './pages/homepage/homepage'
import {ShopPage} from './pages/shop/shop'
import SignInOrUp from './pages/SignInOrUp'
import Header from './components/Header'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {auth, createUserprofileDocument} from './firebase/firebase.utils'
import{setCurrentUser} from './redux/user/user'

class App extends React.Component{
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserprofileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{this.props.setCurrentUser(
          {id:snapShot.id, ...snapShot.data()}
        )})
      }
      this.props.setCurrentUser(userAuth)
    }
    )
  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render (){
    return (<div>
      <Header />
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInOrUp}/>
    </div>)

  }

}

function mapDispatchToProps(dispatch){
  return {setCurrentUser:user=>dispatch(setCurrentUser(user))}
}

export default connect(null,mapDispatchToProps)(App);
