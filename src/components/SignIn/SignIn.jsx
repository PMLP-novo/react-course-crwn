import React from 'react';
import './SignIn.scss'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import {signInWithGoogle} from '../../firebase/firebase.utils'
//import { Test } from './SignIn.styles';


class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    email:'',
    password:''
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      email:'',
      password:''
      })
  }
  handleChange = event =>{
    const {value, name} = event.target;
    this.setState({[name]:value})
  }
  render(){
    return <div className='sign-in'>
      <h2>I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput name='email'handleChange={this.handleChange} label='email' type='email' value={this.state.email} required/>
        <FormInput name='password'handleChange={this.handleChange} label='password' type='password' value={this.state.password} required/>
        <div className='buttons'>
        <CustomButton type='submit'>SIGN IN</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign in with google</CustomButton>
        </div>
      </form>
    </div>
  }
}
export default SignIn;
