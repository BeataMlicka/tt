import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MatchResults from '../components/MatchResults/index';
import SingleResult from './components/SingleResult/index';
import WhiteButton from '../../../../components/Buttons/WhiteButton/index';
import Save from '../components/Save/index';
import NextShotsResultsBoard from './scenes/NextShotsResultsBoard/index';

class NextShotsResults extends Component {

    constructor(){
        super();

        this.state = {
            saveWindow: false,
            fullResultsWindow: false,
            activeBall: 0,
            
        }
    }

    setActiveBall(ball){
        this.setState({
            activeBall: ball
        });
    }

    showWindow(value){
        this.setState({
            saveWindow: value
        });
    }

    showFullResultsWindow(value){
        this.setState({
            fullResultsWindow: value
        });
    }    

    renderWindow(){
        if(this.state.fullResultsWindow === true){
            return(
                <NextShotsResultsBoard 
                    showWindow = { (value) => this.showFullResultsWindow(value) } 
                    number = {this.state.activeBall}
                />
            );
        }else if(this.state.saveWindow === true){
            return(
                <Save showWindow = {(value) => this.showWindow(value)} />
            );
        }
    }
        
    renderTableResult(){
        if(this.state.saveWindow === ""){
            return(
                <div>Result</div>
            );
        }
    }

    render(){
        return(
            <div className="container results">
                <div className="content-wrapper-rel results--container">
                    <header>
                        <h2>Test completed:</h2>
                    </header>
                    <MatchResults 
                        wonSets = { this.props.wonSets }
                        lostSets = { this.props.lostSets }
                        playerSetsPoints = { this.props.playerSetsPoints }
                        opponentSetsPoints = { this.props.opponentSetsPoints }
                    />
                    <div className="results--wrapper col--12">
                        <div className="results--description col--12 row-flex">
                            <div className="col--4">
                                <p>Actions: </p>
                            </div>
                            <div className="col--4">
                                <p>Results: </p>
                            </div>
                            <div className="col--4">
                                <p>See more: </p>
                            </div>
                        </div>
                        { this.props.allFirstBall }
                        <SingleResult
                            name = {'first ball'}
                            wonBall = { this.props.wonFirstBall }
                            lostBall = { this.props.lostFirstBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(0)}
                        />
                        <SingleResult
                            name = {'second ball'}
                            wonBall = { this.props.wonSecondBall }
                            lostBall = { this.props.lostSecondBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(1)}
                        />
                        <SingleResult
                            name = {'third ball'}
                            wonBall = { this.props.wonThirdBall }
                            lostBall = { this.props.lostThirdBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(2)}
                            />
                        <SingleResult
                            name = {'fourth ball'}
                            wonBall = { this.props.wonFourthBall }
                            lostBall = { this.props.lostFourthBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(3)}
                        />
                        <SingleResult
                            name = {'fifth ball'}
                            wonBall = { this.props.wonFifthBall }
                            lostBall = { this.props.lostFifthBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(4)}
                            />
                        <SingleResult
                            name = {'sixth ball'}
                            wonBall = { this.props.wonSixthBall }
                            lostBall = { this.props.lostSixthBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(5)}
                        />
                        <SingleResult
                            name = {'seventh ball'}
                            wonBall = { this.props.wonSeventhBall }
                            lostBall = { this.props.lostSeventhBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(6)}
                        />
                        <SingleResult
                            name = {'eighth ball'}
                            wonBall = { this.props.wonEighthBall }
                            lostBall = { this.props.lostEighthBall }
                            showFullResultsWindow = {(value) => this.showFullResultsWindow(value)}
                            setActiveBall = {() => this.setActiveBall(7)}
                        />

                        <div className="col--12 row-flex">
                            <WhiteButton 
                                className="col--5"
                                text="Save" onClick = {() => this.showWindow(true)} address="/results" />
                        </div>
                    </div>
                </div>
                {this.renderWindow()}
            </div>
        );
    }
}

function mapStateToProps(state){
  
    return {
        wonFirstBall: state.nextShots[0].results.won,
        lostFirstBall: state.nextShots[0].results.lost,
        wonSecondBall: state.nextShots[1].results.won,
        lostSecondBall: state.nextShots[1].results.lost,
        wonThirdBall: state.nextShots[2].results.won,
        lostThirdBall: state.nextShots[2].results.lost,
        wonFourthBall: state.nextShots[3].results.won,
        lostFourthBall: state.nextShots[3].results.lost,
        wonFifthBall: state.nextShots[4].results.won,
        lostFifthBall: state.nextShots[4].results.lost,
        wonSixthBall: state.nextShots[5].results.won,
        lostSixthBall: state.nextShots[5].results.lost,
        wonSeventhBall: state.nextShots[6].results.won,
        lostSeventhBall: state.nextShots[6].results.lost,
        wonEighthBall: state.nextShots[7].results.won,
        lostEighthBall: state.nextShots[7].results.lost,
        sets: state.matchState.allSets,
        wonSets: state.matchState.wonSets,
        lostSets: state.matchState.lostSets,
        playerSetsPoints: state.matchState.playerSetsPoints,
        opponentSetsPoints: state.matchState.opponentSetsPoints
    };
    
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NextShotsResults);