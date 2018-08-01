import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculatePointsPercentage, countElements } from '../../../../../../functions/results'

class NextShotsResultsBoard extends Component {

    constructor(){
        super();

        this.state = {
            ball: '',
            ballName: '',
            allPoints: 0, wonPoints: 0, lostPoints: 0,
            wonPercent: 0, lostPercent: 0,
            shortBhWon: 0, shortBhLost: 0,
            shortMidWon: 0, shortMidLost: 0,
            shortFhWon: 0, shortFhLost:0,
            longBhWon: 0, longBhLost: 0,
            longMidWon: 0, longMidLost: 0,
            longFhWon: 0, longFhLost: 0
        }
    }

    componentDidMount(){
        this.checkBall();
    }

    checkBall(){

        switch(this.props.number){

            case 0:
                this.setState({
                    ball: 'firstBall',
                    ballName: 'first ball'
                });
                this.calculateResults('firstBall', this.props.wonFirstBall, this.props.lostFirstBall);
                break;
            case 1:
                this.setState({
                    ball: 'secondBall',
                    ballName: 'second ball'
                });
                this.calculateResults('secondBall', this.props.wonSecondBall, this.props.lostSecondBall);
                break;
            case 2:
                this.setState({
                    ball: 'thirdBall',
                    ballName: 'third ball'
                });
                this.calculateResults('thirdBall', this.props.wonThirdBall, this.props.lostThirdBall);
                break;
            case 3:
                this.setState({
                    ball: 'fourthBall',
                    ballName: 'fourth ball'
                });
                this.calculateResults('fourthBall', this.props.wonFourthBall, this.props.lostFourthBall);
                break;
            case 4:
                this.setState({
                    ball: 'fifthBall',
                    ballName: 'fifth ball'
                });
                this.calculateResults('fifthBall', this.props.wonFifthBall, this.props.lostFifthBall);
                break;
            case 5:
                this.setState({
                    ball: 'sixthBall',
                    ballName: 'sixth ball'
                });
                this.calculateResults('sixthBall', this.props.wonSixthBall, this.props.lostSixthBall);
                break;
            case 6:
                this.setState({
                    ball: 'seventhBall',
                    ballName: 'seventh ball'
                });
                this.calculateResults('seventhBall', this.props.wonSeventhBall, this.props.lostSeventhBall);
                break;
            case 7:
                this.setState({
                    ball: 'eighthBall',
                    ballName: 'eighth ball'
                });
                this.calculateResults('eighthBall', this.props.wonEighthBall, this.props.lostEighthBall);
                break;
            default:
                break;
        }
    }

    calculateResults(ball , wonPoints, lostPoints){

        this.setState({
            ball: ball,
            allPoints: wonPoints + lostPoints,
            wonPoints: wonPoints,
            lostPoints: lostPoints,
            wonPercent: calculatePointsPercentage((wonPoints + lostPoints), wonPoints),
            lostPercent: calculatePointsPercentage((wonPoints + lostPoints), lostPoints),
            shortBhWon: countElements(this.props.wonShortBh, ball),
            shortBhLost: countElements(this.props.lostShortBh, ball),
            shortMidWon: countElements(this.props.wonShortMid, ball),
            shortMidLost: countElements(this.props.lostShortMid, ball),
            shortFhWon: countElements(this.props.wonShortFh, ball),
            shortFhLost: countElements(this.props.lostShortFh, ball),
            longBhWon: countElements(this.props.wonLongBh, ball),
            longBhLost: countElements(this.props.lostLongBh, ball),
            longMidWon: countElements(this.props.wonLongMid, ball),
            longMidLost: countElements(this.props.lostLongMid, ball),
            longFhWon: countElements(this.props.wonLongFh, ball),
            longFhLost: countElements(this.props.lostLongFh, ball)
        });
    }

    render(){
        return(
            
            <div className="results-board">
                <div className="icon col--12">
                <img 
                    className="x-icon" src={require('./icons/slim-x.svg')} 
                    onClick = {() => this.props.showWindow(false)}
                    alt="X"/>
                </div>
                <header className="col--12 col-center">
                    <h3>{this.state.ballName}</h3>
                    <h3>{this.state.allPoints}</h3>
                </header>
                <div className="col--12 row-flex">
                    <div className="col--6">
                        <p>
                            {this.state.wonPoints}
                            <span>/</span>
                            {this.state.allPoints}
                            {`${' '} (${this.state.wonPercent})`}
                        </p>
                        <p>won</p>
                    </div>
                    <div className="col--6">
                        <p>
                            {this.state.lostPoints}
                            <span>/</span>
                            {this.state.allPoints}
                            {`${' '} (${this.state.lostPercent})`}
                        </p>
                        <p>lost</p>                    
                    </div>
                </div>
                <div className="results-board--table">
                    <div className="results-board--table--net col--12"></div>
                    <div className="results-board--table--container col--11">
                        <div className="results-board--table--container--item col-center">
                            <p className="won">
                                {this.state.shortBhWon}
                                <span>/</span>
                                {this.state.shortBhWon + this.state.shortBhLost}
                            </p>
                            <p className="lost">
                                {this.state.shortBhLost}
                                <span>/</span>
                                {this.state.shortBhWon + this.state.shortBhLost}
                            </p>
                        </div>
                        <div className="results-board--table--container--item col-center">
                            <p className="won">
                                {this.state.shortMidWon}
                                <span>/</span>
                                {this.state.shortMidWon + this.state.shortBhLost}
                            </p>
                            <p className="lost">
                                {this.state.shortMidLost}
                                <span>/</span>
                                {this.state.shortMidWon + this.state.shortMidLost}
                            </p>
                        </div>
                        <div className="results-board--table--container--item col-center">
                            <p className="won">
                                {this.state.shortFhWon}
                                <span>/</span>
                                {this.state.shortFhWon + this.state.shortFhLost}
                            </p>
                            <p className="lost">
                                {this.state.shortFhLost}
                                <span>/</span>
                                {this.state.shortFhWon + this.state.shortFhLost}
                            </p>
                        </div>
                        <div className="results-board--table--container--item col-center">
                            <p className="won">
                                {this.state.longBhWon}
                                <span>/</span>
                                {this.state.longBhWon + this.state.longBhLost}
                            </p>
                            <p className="lost">
                                {this.state.longBhLost}
                                <span>/</span>
                                {this.state.longBhWon + this.state.longBhLost}
                            </p>
                        </div>
                        <div className="results-board--table--container--item col-center">
                            <p className="won">
                                {this.state.longMidWon}
                                <span>/</span>
                                {this.state.longMidWon + this.state.longMidLost}
                            </p>
                            <p className="lost">
                                {this.state.longMidLost}
                                <span>/</span>
                                {this.state.longMidWon + this.state.longMidLost}
                            </p>
                        </div>
                        <div className="results-board--table--container--item col-center">
                            <p className="won">
                                {this.state.longFhWon}
                                <span>/</span>
                                {this.state.longFhWon + this.state.longFhLost}
                            </p>
                            <p className="lost">
                                {this.state.longFhLost}
                                <span>/</span>
                                {this.state.longFhWon + this.state.longFhLost}
                            </p>
                        </div>
                    </div>
                </div>
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
        wonShortBh: state.tablePlaces[0].results.won,
        lostShortBh: state.tablePlaces[0].results.lost,
        wonShortMid: state.tablePlaces[1].results.won,
        lostShortMid: state.tablePlaces[1].results.lost,
        wonShortFh: state.tablePlaces[2].results.won,
        lostShortFh: state.tablePlaces[2].results.lost,   
        wonLongBh: state.tablePlaces[3].results.won,
        lostLongBh: state.tablePlaces[3].results.lost,   
        wonLongMid: state.tablePlaces[4].results.won,
        lostLongMid: state.tablePlaces[4].results.lost, 
        wonLongFh: state.tablePlaces[5].results.won,
        lostLongFh: state.tablePlaces[5].results.lost         
    };
    
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NextShotsResultsBoard);