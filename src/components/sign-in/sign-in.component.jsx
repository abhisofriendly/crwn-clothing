import React, { Component } from 'react'
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends Component{ 
    constructor(){
        super()

        this.state = {
            email: "",
            password: ""
        }
    }   

    handleSubmit =event=>{
        event.preventDefault();
        this.setState({email:'', password:'' })
    }

    onHandleChange = (event)=>{
        const { value, name } = event.target;
        this.setState({ [name]: value})
    }

    render(){
        return(
            <div className="sign-in"> 
                <h2>I already have an account</h2>
                <span>Sign in with your email and pasword</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required handleChange={this.onHandleChange} label="email" />
                    <FormInput name="password" type="password" value={this.state.password} required handleChange={this.onHandleChange} label="password" />

                    <CustomButton type="submit" value="submit form">sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn