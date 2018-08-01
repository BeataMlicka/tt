import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetInitialData, resetTablePlaces, resetMatchState } from '../../actions/index';
import Navigation from '../../components/Navigation/index';
import NextShotsResults from './scenes/NextShotsResults/index';


class ResultsController extends Component {

    renderContent(){

        if(this.props.testsType === 'next-shots'){
            return(
                <NextShotsResults/>
            );
        }
    }

    resetData(){
        this.props.resetInitialData();
        this.props.resetLostPoints();
        this.props.resetMatchState();
    }

    render(){
        return(
            <div className="wrapper">
                <div className="content-wrapper">
                    {this.renderContent()}
                </div>
                <Navigation onClick = {() => this.resetData() }/>
            </div>
        );
    }
}

function mapStateToProps(state){
  
    return {
        testsType: state.initialData.kindOfTest
    };
    
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
        resetInitialData, resetTablePlaces, resetMatchState
      }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ResultsController);