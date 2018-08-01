import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWonPlace, addLostPlace, addCheckedPlace
    } from '../../actions/index';
import SimpleTableItem from './components/SimpleTableItem/index';


class SimpleTable extends Component {

    addPlace(place, ball){

        this.props.addCheckedPlace();

        if(this.props.lastAction === true){
            this.props.addWonPlace(place, ball);
        } else if(this.props.lastAction === false){
            this.props.addLostPlace(place, ball);
        }
    }

    checkPlayersTableSite(site){

        if(this.props.playerTableSide === site){
            return 'active';
        } else {
            return '';
        }
    }

    exFunctions(){
        this.props.showTableSchema();
        this.addPlace('empty', this.props.lastBall);
    }

    render() {

        return (
            <div className="table-container">
                <div className="col--12">
                    <img 
                        className="x-icon" src={require('../../assets/icons/slim-x.svg')} 
                        onClick = {() => this.exFunctions()}
                        alt="X"/>
                </div>
                <p className = {`table-site ${this.checkPlayersTableSite('upper')}`}>- - - - your side - - - -</p>
                <div className="table">
                    <div className="table-half">
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('longFh', this.props.lastBall)}
                            background='top-left'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('longMid', this.props.lastBall)}
                            background='top-middle'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('longBh', this.props.lastBall)}
                            background='top-right'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()} 
                            markBallsPlace = {() => this.addPlace('shortFh', this.props.lastBall)} 
                            background='left'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('shortMid', this.props.lastBall)}
                            background='middle'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('shortBh', this.props.lastBall)}
                            background='right'/>
                    </div>
                    <div className="table-net">
                    </div>
                    <div className="table-half">
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('shortBh', this.props.lastBall)}
                            background='left'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('shortMid', this.props.lastBall)} 
                            background='middle'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}  
                            markBallsPlace = {() => this.addPlace('shortFh', this.props.lastBall)}
                            background='right'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('longBh', this.props.lastBall)}
                            background='bottom-left'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('longMid', this.props.lastBall)}
                            background='bottom-middle'/>
                        <SimpleTableItem 
                            showTableSchema = {() => this.props.showTableSchema()}
                            markBallsPlace = {() => this.addPlace('longFh', this.props.lastBall)}
                            background='bottom-right'/>
                    </div>
                </div>
                <p className = {`table-site ${this.checkPlayersTableSite('lower')}`}>- - - - your side - - - -</p>
          </div>
        );
    }
}

function mapStateToProps(state){
  return {
    lastAction: state.matchState.lastAction,
    lastBall: state.matchState.lastBall,
    tableSite: state.matchState.tableSite,
    endMatch: state.matchState.endMatch
};
  
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addWonPlace,
    addLostPlace,
    addCheckedPlace
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);