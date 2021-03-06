import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import  { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import "./sign-up.styles.scss";

class SignUp extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async(event)=>{
        event.preventDefault();
        const { displayName,  email, password, confirmPassword } = this.state;
        console.log(this.state)
        if(password !== confirmPassword){
            alert("password do not match")
            return;
        }
        
        // try{
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password)
        //     await createUserProfileDocument(user, { displayName });
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     })
        // }catch(error){
        //     console.log(error)
        // }
    }

    handleChange = event=> {
        const { name, value } = event.target;
        console.log(event.target)
        this.setState({[name]: value})
    }

    render(){
        const { displayName,  email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text"  name="displayName" value={displayName} label="Display Name" onChange={this.handleChange} required />
                    <FormInput type="email"  name="email" value={email} label="Email" required  onChange={this.handleChange} />
                    <FormInput type="password"  name="password" value={password} label="Password" required onChange={this.handleChange} />
                    <FormInput type="password"  name="confirmPassword" value={confirmPassword} label="Confirm Password" required onChange={this.handleChange} />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;