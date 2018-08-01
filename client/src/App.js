import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuth, localAuth } from './actions/index';

import Authentication from './controllers/Authentication';
import SignUp from './scenes/SignUp/index';
import InitialInfo from './scenes/InitialInfo';
import MatchController from './scenes/MatchController';
import ResultsController from './scenes/ResultsController';

class App extends Component {

    componentDidMount(){
        this.props.googleAuth();
        this.props.localAuth(localStorage.getItem('token'));
    }

    render() {
        return(
            <BrowserRouter>
                <div className="wrapper">
                    <Route exact path="/" component={Authentication}/>
                    <Route exact path="/home" component={Authentication}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/initial" component={InitialInfo}/>
                    <Route path="/test" component={MatchController}/>
                    <Route path="/results" component={ResultsController}/>
                </div>
            </BrowserRouter>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        googleAuth,
        localAuth
    }, dispatch);
  }

export default connect(null, mapDispatchToProps)(App);