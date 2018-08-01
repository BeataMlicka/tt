import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from '../../scenes/Landing/index';
import TestsMenu from '../../scenes/TestsMenu/index';

import {
    setUsername,
    setUserEmail,
    setAuthMethod
    } from '../../actions/index.js';


class Authentication extends Component {

    constructor() {
        super();
        
        this.state = {
            username: '',
            email: ''
        }
    }

    setCurrentUser(user){

        if(this.state.username === ''){
            this.props.setUsername(user.username);
            this.props.setUserEmail(user.email);
            
            this.setState({
                username: user.username,
                email: user.email
            });
        }
    }

    checkAuthMethod(){
         
        if(this.props.authGoogle !== null && this.props.authGoogle !==false) {
            this.props.setAuthMethod('google');
        } else if(this.props.accessStatus === 200){
            this.props.setAuthMethod('local');
        } else {
            this.props.setAuthMethod('');
        }
    }

    renderContent() {
        
        this.checkAuthMethod();

        if(this.props.authMethod === 'local'){

            if(this.props.accessStatus === null || this.props.accessStatus === undefined){
                return '';
            }
            else if(this.props.accessStatus !== 200){
                return (
                    <Landing/>
                );
            } else if(this.props.accessStatus === 200){
                return (
                    <TestsMenu/>
                );
            }
        } else if(this.props.authMethod === 'google') {
            if(this.props.authGoogle === null){
                return '';
            }
            else if(this.props.authGoogle === false){
                return (
                    <Landing/>
                );
            } else {
                return (
                    <div className="wrapper">
                        <TestsMenu/>
                        {this.setCurrentUser(this.props.authGoogle.google)}
                    </div>
                );
            }
        }else {
            return (
                <Landing/>
            );
        }
    }

    render() {
        return (
            <div className="wrapper">
                {this.renderContent()}
            </div>
        );        
    }
}

function mapStateToProps(state){
    return {
        authGoogle: state.googleAuth,
        authLocal: state.localAuth,
        username: state.user.username,
        email: state.user.email,
        accessStatus: state.user.status,
        authMethod: state.user.method
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        setUsername,
        setUserEmail,
        setAuthMethod
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);