import React from 'react';
import './SignInOrUp.scss'
//import { Test } from './SignInOrUp.styles';
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

const SignInOrUpPage = (props) => (
  <div className="sign-in-or-up">
    <SignIn/>
    <SignUp/>
  </div>
);

export default SignInOrUpPage;
