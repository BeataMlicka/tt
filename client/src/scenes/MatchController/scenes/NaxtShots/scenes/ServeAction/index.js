import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWonBall, addLostBall, setLastAction, setLastBall
    } from '../../../../../../actions/index';
import SingleShot from '../components/SingleShot';


class ServeActions extends Component {


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
        this.props.addLostBall(ball);
        this.props.addCurrentServeBall();
        this.props.showTableSchema();
        this.props.setLastAction(false);
        this.props.setLastBall(ball);
    }

    render() {
        return (
          <div className="serve-actions">
              <SingleShot
                name = 'serve'
                addWonPoint = {() => this.addWonBall('firstBall')}
                addLostPoint = {() => this.addLostBall('firstBall')}
              />
              <SingleShot
                name = 'third ball'
                addWonPoint = {() => this.addWonBall('thirdBall')}
                addLostPoint = {() => this.addLostBall('thirdBall')}
              />
              <SingleShot
                name = 'fifth ball'
                addWonPoint = {() => this.addWonBall('fifthBall')}
                addLostPoint = {() => this.addLostBall('fifthBall')}
              />
              <SingleShot
                name = 'seventh and more'
                addWonPoint = {() => this.addWonBall('seventhBall')}
                addLostPoint = {() => this.addLostBall('seventhBall')}
              />
              {/* <p>1 won - {this.props.wonFirstBall}</p>
              <p>1 lost - {this.props.lostFirstBall}</p>
              <p>3 won - {this.props.wonThirdBall}</p>
              <p>3 lost - {this.props.lostThirdBall}</p>
              <p>5 won - {this.props.wonFifthBall}</p>
              <p>5 lost - {this.props.lostFifthBall}</p>
              <p>7 won - {this.props.wonSeventhBall}</p>
              <p>7 lost - {this.props.lostSeventhBall}</p> */}
          </div>
        );
    }
}


function mapStateToProps(state){
  
    return {
        wonFirstBall: state.nextShots[0].results.won,
        lostFirstBall: state.nextShots[0].results.lost,
        wonThirdBall: state.nextShots[2].results.won,
        lostThirdBall: state.nextShots[2].results.lost,
        wonFifthBall: state.nextShots[4].results.won,
        lostFifthBall: state.nextShots[4].results.lost,
        wonSeventhBall: state.nextShots[6].results.won,
        lostSeventhBall: state.nextShots[6].results.lost
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ServeActions);