import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ServeActions from './ServeActions';
import RespondActions from './RespondActions';

class NextShots extends Component {

    kindOfAction(){

        if(this.props.serve) {
            return (
                <ServeActions
                    addWonPoint = {() => this.props.addWonPoint()}
                    addLostPoint = {() => this.props.addLostPoint()}
                    addCurrentServeBall = {() => this.props.addCurrentServeBall()}
                    showTableSchema = {() => this.props.showTableSchema()}
                />
            );
        } else if(!this.props.serve) {
            return (
                <RespondActions
                    addWonPoint = {() => this.props.addWonPoint()}
                    addLostPoint = {() => this.props.addLostPoint()}
                    addCurrentServeBall = {() => this.props.addCurrentServeBall()}
                    showTableSchema = {() => this.props.showTableSchema()}
                />
            );
        }
    }

    render() {

        let serveActive = this.props.serve ? "next-shots--button--active" : "";
        let respondActive = this.props.serve ? "" : "next-shots--button--active";

        return (
            <div className="next-shots">
                <div className="next-shots--nav col--12">
                    <div className={`next-shots--button col--6 ${serveActive}`}>
                        <h4>Serve Actions</h4>
                    </div>
                    <div className={`next-shots--button col--6 ${respondActive}`}>
                        <h4>Respond Actions</h4>
                    </div>
                </div>
                { this.kindOfAction() }
          </div>
        );
    }
}

function mapStateToProps(state){
  
  return {

  };
  
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NextShots);