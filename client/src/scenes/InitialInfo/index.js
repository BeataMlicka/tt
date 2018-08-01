import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from '../../components/Navigation/index';
import InitialForm from './components/InitialForm/index';
import { resetInitialData, resetTablePlaces, resetMatchState } from '../../actions/index';

class InitialInfo extends Component {

    resetData(){
        this.props.resetInitialData();
        this.props.resetLostPoints();
        this.props.resetMatchState();
    }

    render(){

        return (
            <div className="wrapper initial-info">
                <div className="content-wrapper">
                    <div className="content">
                        <header className="col--12">
                            <h2>Fill the data:</h2>
                        </header>
                        <div className="initial-info--content">
                            <InitialForm/>
                        </div>
                    </div>
                </div>
                <Navigation onClick = {() => this.resetData() }/>
            </div>          
        );        
    }
}

  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
        resetInitialData, resetTablePlaces, resetMatchState
      }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(InitialInfo);