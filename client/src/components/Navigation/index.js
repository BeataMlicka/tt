import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setToken } from '../../api/localAuthAPI';


class Navigation extends Component {

    constructor(){
        super();

        this.state = {
            redirect: ''
        }
    }

    componentDidMount(){
        this.checkAuthMethod();
    }

    checkAuthMethod(){

        if(this.props.authMethod === 'google'){
            this.setState({
                redirect: '/api/logout'
            });
        } else if(this.props.authMethod === 'local'){
            this.setState({
                redirect: '/'
            });
        } else {
            this.setState({
                redirect: '/'
            });
        }
    }

    signOut(){
         
        if(this.props.authMethod === 'local'){
            setToken('');
        }
    }

    backHome(){
        console.log('back home');
    }

    render(){
        return (
            <nav className="col--12">
                <button onClick = { () => this.props.onClick() }>
                    <Link to = '/' >
                        <img  
                            alt=":)"
                            className="logout-icon" 
                            src={require('./icons/home.svg')} 
                        />
                    </Link>
                </button>
                <h3>{this.props.text}</h3>
                <button onClick = {() => this.signOut()}>
                    <Link to = {this.state.redirect} >
                        <img  
                            alt=":)"
                            className="logout-icon" 
                            src={require('./icons/logout-black-circle.svg')} 
                        />
                    </Link>
                </button>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return {
        authMethod: state.user.method
    }
}

export default connect(mapStateToProps)(Navigation);