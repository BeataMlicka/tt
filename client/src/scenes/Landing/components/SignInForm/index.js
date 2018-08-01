import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn, setAuthMethod } from '../../../../actions/index';
import { 
    //setUsername,
    //setUserEmail,
    setToken 
} from '../../../../api/localAuthAPI';

import WhiteButton from '../../../../components/Buttons/WhiteButton/index';
import GoogleButton from '../../../../components/Buttons/GoogleButton/index';


class SignInForm extends Component {

    constructor() {
        super();

        this.state = {
            errorMsg: ''
        }
    }

    renderField(field){
        return(
            <div>
                <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...field.input}
                />
                <p className="warning">{field.meta.touched ? field.meta.error : ''}</p>
                <p className="warning">{}</p>
            </div>
        );
    }

    onSubmit(values) {
        //this === component
        //console.log(values);
        this.props.signIn(values);
        
        if(setToken(this.props.token)){

        }else {
            // this.setState({
            //     errorMsg: 'E-mail or password is incorrect'
            // });
        }

    }

    setAuthMethod(method){
        this.props.setAuthMethod(method);
    }
    render(){

        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="signin">
                    <Field
                        placeholder="e-mail"
                        name="email"
                        type="email"
                        autocomplete="off"
                        component = {this.renderField}
                    />
                    <Field
                        placeholder="password"
                        name="password"
                        type="password"
                        autocomplete="off"
                        component = {this.renderField}
                    />
                    <WhiteButton text='Sign In' onClick={() => this.setAuthMethod('local')} address="/" />
                </form>
                <GoogleButton text='Sign in with google' />
            </div>
        );        
    }
}

function validate(values) { //values - object with all data from form
    
    const errors = {};

    //validate the inputs from 'values'
    if(!values.email){
        errors.email = "Enter an email";
    }
    if(!values.password){
        errors.password = "Enter a password";
    }

    //if errors is empty, the form is fine to submit
    //if error has any properties, redux for assumes form is valid

    return errors;
}

function mapStateToProps(state){
    return {
        token: state.localSignIn,
        method: state.user.method
    }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signIn,
        setAuthMethod
    }, dispatch);
}

export default reduxForm({
    validate,
    form: 'SignInForm'
})(
    connect(mapStateToProps, mapDispatchToProps)(SignInForm)
);