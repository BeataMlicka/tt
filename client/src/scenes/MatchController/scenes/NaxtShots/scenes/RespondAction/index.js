import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWonBall, addLostBall, setLastBall, setLastAction
        } from '../../../../../../actions/index';
import SingleShot from '../components/SingleShot';


class RespondActions extends Component {

    addWonBall(ball) {
        this.props.addWonPoint();
        this.props.addWonBall(ball);
        this.props.addCurrentServeBall();
        this.props.showTableSchema();
        this.props.setLastAction(true);
        this.props.setLastBall(ball);
    }

    addLostBall(ball){
        this.props.addLostPoint();
        this.props.addLostBall();
        this.props.addCurrentServeBall();
        this.props.showTableSchema();
        this.props.setLastAction(false);
        this.props.setLastBall(ball);
    }

    render() {

        return (
          <div className="serve-actions">
              <SingleShot
                name = 'second ball'
                addWonPoint = {() => this.addWonBall('secondBall')}
                addLostPoint = {() => this.addLostBall('secondBall')}
              />
              <SingleShot
                name = 'fourth ball'
                addWonPoint = {() => this.addWonBall('fourthBall')}
                addLostPoint = {() => this.addLostBall('fourthBall')}
              />
              <SingleShot
                name = 'sixth ball'
                addWonPoint = {() => this.addWonBall('sixthBall')}
                addLostPoint = {() => this.addLostBall('sixthBall')}
              />
              <SingleShot
                name = 'eighth and more'
                addWonPoint = {() => this.addWonBall('eighthBall')}
                addLostPoint = {() => this.addLostBall('eighthBall')}
              />
              {/* <p>2 won - {this.props.wonSecondBall}</p>
              <p>2 lost - {this.props.lostSecondBall}</p>
              <p>4 won - {this.props.wonFourthBall}</p>
              <p>4 lost - {this.props.lostFourthBall}</p>
              <p>6 won - {this.props.wonSixthBall}</p>
              <p>6 lost - {this.props.lostSixthBall}</p>
              <p>8 won - {this.props.wonEighthBall}</p>
              <p>8 lost - {this.props.lostEighthBall}</p> */}
          </div>
        );
    }
}


function mapStateToProps(state){
  
    return {
        wonSecondBall: state.nextShots[1].results.won,
        lostSecondBall: state.nextShots[1].results.lost,
        wonFourthBall: state.nextShots[3].results.won,
        lostFourthBall: state.nextShots[3].results.lost,
        wonSixthBall: state.nextShots[5].results.won,
        lostSixthBall: state.nextShots[5].results.lost,
        wonEighthBall: state.nextShots[7].results.won,
        lostEighthBall: state.nextShots[7].results.lost
    };
    
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addWonBall,
        addLostBall,
        setLastAction,
        setLastBall
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RespondActions);