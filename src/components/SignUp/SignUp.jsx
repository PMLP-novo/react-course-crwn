import React from 'react';
import './SignUp.scss'

import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import {auth, createUserprofileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component{
  constructor(){
    super()
    this.state ={
      displayName:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  }
  handleSubmit = async event => {
    event.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if(password!==confirmPassword){
      alert("passwords don't match")
      return
    }
    try{
      const{user} = await auth.createUserWithEmailAndPassword(email,password)
      await createUserprofileDocument(user,{displayName})
      this.setState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
      })
    }catch(error){
      alert(error.message)
      console.error(error)
    }
  }

  handleChange = event =>{
    const{name, value} = event.target
    this.setState({[name]:value})
  }
  render(){
    const {displayName, email, password, confirmPassword} = this.state
    return(
      <div className='sign-up'>
        <h2>I do not have an account</h2>
        <span> Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput 
          name='displayName'
          handleChange={this.handleChange} 
          label='Display Name' 
          type='text' 
          value={displayName} 
          required/>
        <FormInput 
          name='email'
          handleChange={this.handleChange} 
          label='Email' 
          type='email' 
          value={email} 
          required/>
        <FormInput 
          name='password'
          handleChange={this.handleChange} 
          label='Password' 
          type='password' 
          value={password} 
          required/>
        <FormInput 
          name='confirmPassword'
          handleChange={this.handleChange} 
          label='Confirm Password' 
          type='password' 
          value={confirmPassword} 
          required/>
        <div className='buttons'>
        <CustomButton type='submit'>SIGN UP</CustomButton>
        </div>
      </form>
      </div>
    )
  }
}
export default SignUp;
