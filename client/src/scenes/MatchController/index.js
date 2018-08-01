import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWonPoint, addLostPoint, 
        addWonSet, addLostSet, 
        resetWonPoints, resetLostPoints,
        setServe, 
        addPlayersSetsPoints, addOpponentSetsPoints,
        resetInitialData, resetTablePlaces, resetMatchState
        } from '../../actions/index';
import { checkWonSetCondition, checkWonMatchCondition } from '../../functions/match_conditions';
import { Redirect } from 'react-router-dom';

import Navigation from '../../components/Navigation/index';
import Counter from '../../components/Counter/index';
import SimpleTable from '../../components/Table/index';
import NextShots from './scenes/NaxtShots/index';

class MatchController extends Component {

    constructor() {
        super();
        this.state = {
            currentServeBall: 0,
            table: false,
            playerTableSide: '',
            setLimits: 0,
            serve: true
        }
    }
    
    componentDidMount(){
        this.setState({
            playerTableSide: this.props.playerTableSide,
            setsLimit: this.props.setsLimit,
            serve: this.props.serve
        });
    }

    renderContent() {

        if(this.state.table === true) {
            return(
                <SimpleTable 
                    showTableSchema = {() => this.showTableSchema()}
                    playerTableSide = {this.state.playerTableSide}
                    />
            );
        } else if(this.props.testsType === 'next-shots'){
            return(
                <NextShots 
                    addWonPoint = {() => this.addWonPoint()}
                    addLostPoint = {() => this.addLostPoint()}
                    addCurrentServeBall = {() => this.addCurrentServeBall()}
                    showTableSchema = {() => this.showTableSchema()}
                    serve = {this.state.serve}
                />
            );
        } else {
            
        }
    }

    //macth ending function
    checkWonMatchCondition(){

        const result = checkWonMatchCondition(this.props.wonSets, this.props.lostSets, this.state.setsLimit);

        if((result === 'wonMatch' || result === 'lostMatch') && (this.props.allPoints === this.props.allCheckedPlace)){
            return(
                <Redirect push to="/results"/>
            );
        }
    }

    //set ending and change site functions

    checkWonSetCondition(){
        const result = checkWonSetCondition(this.props.wonPoints, this.props.lostPoints);

        if(result === 'wonSet'){
            this.props.addWonSet();
        } else if (result === 'lostSet'){
            this.props.addLostSet();
        }

        if(result !== ''){
            this.props.addOpponentSetsPoints(this.props.lostPoints);
            this.props.addPlayersSetsPoints(this.props.wonPoints);
            this.props.resetWonPoints();
            this.props.resetLostPoints();
            this.changeSite();
            
        }
    }

    changeSite(){
        if(this.state.playerTableSide === 'lower') {
            this.setState({
                playerTableSide: 'upper'
            });
        } else {
            this.setState({
                playerTableSide: 'lower'
            });
        }
    }  

    checkServeChange() {

        if(this.state.currentServeBall === 2){
            this.setState({
                currentServeBall: 0,
                serve: !this.state.serve
            });
        }
    }

    showTableSchema(){
        this.setState({
            table: !this.state.table
        });
    }

    addCurrentServeBall() {
        this.setState({
            currentServeBall: this.state.currentServeBall + 1
        });
    }

    addWonPoint(){
        this.props.addWonPoint();
    }

    addLostPoint(){
        this.props.addLostPoint();
    }

    resetData(){
        this.props.resetInitialData();
        this.props.resetLostPoints();
        this.props.resetMatchState();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="content-wrapper match-controller">
                    <div className="match-controller--container content">
                        {this.renderContent()}
                        <Counter 
                            wonPoints = {this.props.wonPoints} 
                            lostPoints = {this.props.lostPoints}
                            wonSets = {this.props.wonSets}
                            lostSets = {this.props.lostSets}
                            playerTableSide = {this.state.playerTableSide}
                        />
                    </div>
                </div>
                <Navigation onClick = {() => this.resetData() }/>
                {this.checkServeChange()}
                {this.checkWonSetCondition()}
                {this.checkWonMatchCondition()}
            </div>
        );
    }
}

function mapStateToProps(state){
  
  return {
        wonPoints: state.matchState.wonPoints,
        lostPoints: state.matchState.lostPoints,
        wonSets: state.matchState.wonSets,
        lostSets: state.matchState.lostSets,
        serve: state.initialData.serve,
        playerTableSide: state.initialData.playerTableSide,
        setsLimit: state.initialData.setsLimit,
        allPoints: state.matchState.allPoints,
        allCheckedPlace: state.matchState.allCheckedPlace,
        playerSetsPoints: state.matchState.playerSetsPoints,
        opponentSetsPoints: state.matchState.opponentSetsPoints,
        testsType: state.initialData.kindOfTest
  };
  
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      addWonPoint,
      addLostPoint,
      addWonSet,
      addLostSet,
      resetWonPoints,
      resetLostPoints,
      setServe,
      addPlayersSetsPoints,
      addOpponentSetsPoints,
      resetInitialData, 
      resetTablePlaces, 
      resetMatchState
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchController);