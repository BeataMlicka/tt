import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { signUp } from '../../../../actions/index'; 

import WhiteButton from '../../../../components/Buttons/WhiteButton/index';
import GoogleButton from '../../../../components/Buttons/GoogleButton/index';

class SignUpForm extends Component {

    renderField(field){
        return(
            <div>
                <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...field.input}
                />
                <p className="warning">{field.meta.touched ? field.meta.error : ''}</p>
            </div>
        );
    }

    onSubmit(values) {
        this.props.signUp({
            username: values.username,
            email: values.email,
            password: values.password
        });
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="signup-container">
                <form className="signup" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    
                    <Field
                        placeholder="username"
                        name="username"
                        type="text"
                        component = {this.renderField}
                    />
                    <Field
                        placeholder="e-mail"
                        name="email"
                        type="email"
                        component = {this.renderField}
                    />
                    <Field
                        placeholder="password"
                        name="password"
                        type="password"
                        component = {this.renderField}
                    />
                    <Field
                        placeholder="confirm the password"
                        name="passwordConfirmation"
                        type="password"
                        component = {this.renderField}
                    />
                    <WhiteButton text='Sign In' onClick = { () => {}} address="/" />
                </form>
                <GoogleButton text='Sign in with google' />             
            </div>
        );
    }
}

function validate(values) { //values - object with all data from form
    
    const errors = {};

    //username validate
    if(!values.username){
        errors.username = "Enter a username";
    }
    if(values.username){
        if(values.username.length < 5){
            errors.username = "Username must be 5 charatcers or more";
        }
        if(values.username.length > 20){
            errors.username = "Username must be 20 charatcers or less";
        }
    }

    //username validate
    if(!values.email){
        errors.email = "Enter an username";
    }
    if(values.email){
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
    }


    //password validate
    if(!values.password){
        errors.password = "Enter a password";
    }
    if(values.password){
        if(values.password.length < 7){
            errors.password = "Password must have 7 characters or more and should contain one number and one special character"
        }
    }
    if(values.password !== values.passwordConfirmation){
        errors.passwordConfirmation = "Password confirmation must be the same as the password";
    }

    return errors;
}


function mapStateToProps(state){
    return {
    }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signUp
    }, dispatch);
}

export default reduxForm({
    validate,
    form: 'SignUpForm'
})(
    connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
);