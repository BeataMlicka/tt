import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setKindOfTest } from '../../actions/index';
import Navigation from '../../components/Navigation/index';
import InitialInfo from '../InitialInfo/index';

class TestsMenu extends Component {

    setTestsType(test){
        this.props.setKindOfTest(test);
    }

    renderContent() {

        if(this.props.testsType !== ''){
            return(
                <InitialInfo/>
            );
        } else {
            return(
                <div className="content-wrapper tests-menu">
                    <header className="col-center">
                        <h2>Welcome to <span>pinqi</span></h2>
                        <h2>Choose the test:</h2>
                    </header>
                    <div className="tests-menu--content">
                        <div 
                            className="menu-item menu-item--left col-center" 
                            onClick = {() => {this.setTestsType('next-shots')}}>
                            <Link to="/">
                                <h3>Next Shots</h3>
                            </Link>
                        </div>
                        <div 
                            className="menu-item menu-item--right col-center"
                            onClick = {() => {this.setTestsType('next-actions')}}>
                            <Link to="/">
                                <h3>Next Actions</h3>
                            </Link>
                        </div>
                        {/* <div 
                            className="menu-item menu-item--bottom menu-item--left"
                            onClick = {() => {this.setTestsType('sets-analysis')}}>
                            <h3>
                                <Link to="/">Sets analysis</Link>
                            </h3>
                        </div>
                        <div 
                            className="menu-item menu-item--bottom menu-item--right"
                            onClick = {() => {this.setTestsType('deep-analysis')}}>
                            <h3>
                                <Link to="/">Deep Analysis</Link>
                            </h3>
                        </div> */}
                    </div>
                </div>
            );
        }
    }

    render(){
        return (
            <div className="wrapper">
                {this.renderContent()}
                <Navigation />
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
        setKindOfTest
      }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TestsMenu);