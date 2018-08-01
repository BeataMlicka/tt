// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addWonPoint, addLostPoint, 
//         addWonSet, addLostSet, 
//         resetWonPoints, resetLostPoints,
//         setServe, 
//         addPlayersSetsPoints, addOpponentSetsPoints,
//         } from '../../actions/index';
// import { checkWonSetCondition, checkWonMatchCondition } from '../../functions/match_conditions';
// import { Redirect } from 'react-router-dom';

// import Counter from '../counter/Counter';
// import NextShots from './nextshots/NextShots';
// import SimpleTable from '../table/SimpleTable';
// import Prompt from '../Prompt';

// class MatchController extends Component {

//     constructor() {
//         super();
//         this.state = {
//             currentServeBall: 0,
//             table: false,
//             playerTableSide: '',
//             setLimits: 0
//         }
//     }
    
//     componentDidMount(){
//         this.setState({
//             playerTableSide: this.props.playerTableSide,
//             setsLimit: this.props.setsLimit
//         });
//     }

//     renderContent() {

//         if(this.state.table === true) {
//             return(
//                 <SimpleTable 
//                     showTableSchema = {() => this.showTableSchema()}
//                     playerTableSide = {this.state.playerTableSide}
//                     />
//             );
//         } else if(this.props.testsType === 'next-shots'){
//             return(
//                 <NextShots 
//                     addWonPoint = {() => this.addWonPoint()}
//                     addLostPoint = {() => this.addLostPoint()}
//                     addCurrentServeBall = {() => this.addCurrentServeBall()}
//                     showTableSchema = {() => this.showTableSchema()}
//                     serve = {this.props.serve}
//                 />
//             );
//         } else {
//             console.log(this.props.testsType);
//         }
//     }

//     //macth ending function
//     checkWonMatchCondition(){
//         const result = checkWonMatchCondition(this.props.wonSets, this.props.lostSets, this.state.setsLimit);

//         if((result === 'wonMatch' || result === 'lostMatch') && (this.props.allPoints === this.props.allCheckedPlace)){
//             console.log('MATCH - ', result);
//             return(
//                 <Redirect push to="/results"/>
//             );
//         }
//     }

//     //set ending and change site functions

//     checkWonSetCondition(){
//         const result = checkWonSetCondition(this.props.wonPoints, this.props.lostPoints);

//         if(result === 'wonSet'){
//             this.props.addWonSet();
//         } else if (result === 'lostSet'){
//             this.props.addLostSet();
//         }

//         if(result !== ''){
//             this.props.addOpponentSetsPoints(this.props.lostPoints);
//             this.props.addPlayersSetsPoints(this.props.wonPoints);
//             this.props.resetWonPoints();
//             this.props.resetLostPoints();
//             this.changeSite();
//             console.log('player - ', this.props.playerSetsPoints);
//             console.log('opponent - ', this.props.opponentSetsPoints);
//         }
//     }

//     changeSite(){
//         if(this.state.playerTableSide === 'lower') {
//             this.setState({
//                 playerTableSide: 'upper'
//             });
//         } else {
//             this.setState({
//                 playerTableSide: 'lower'
//             });
//         }
//     }  

//     checkServeChange() {

//         if(this.state.currentServeBall === 2){
//             this.props.setServe(!this.props.serve);

//             this.setState({
//                 currentServeBall: 0
//             });
//         }
//     }

//     showTableSchema(){
//         this.setState({
//             table: !this.state.table
//         });
//     }

//     addCurrentServeBall() {
//         this.setState({
//             currentServeBall: this.state.currentServeBall + 1
//         });
//         //console.log('add current ball - ' + this.state.currentServeBall);
//     }

//     addWonPoint(){
//         this.props.addWonPoint();
//     }

//     addLostPoint(){
//         this.props.addLostPoint();
//     }

//     render() {
    
//         return (
//             <div className="content">
//                 {this.renderContent()}

//                 {/* <SimpleTable/> */}
//                 <Prompt message = "dodaj punkt"/>
//                 <Counter 
//                     wonPoints = {this.props.wonPoints} 
//                     lostPoints = {this.props.lostPoints}
//                     wonSets = {this.props.wonSets}
//                     lostSets = {this.props.lostSets}
//                     playerTableSide = {this.state.playerTableSide}
//                 />

//                 { this.checkWonSetCondition() }
//                 { this.checkWonMatchCondition() }
//                 { this.checkServeChange() }
//                 {/* <h3>NextShots</h3>    
//                     {this.kindOfAction()}
//                 </div> */}
//             </div>
//         );
//     }
// }

// function mapStateToProps(state){
  
//   return {
//         wonPoints: state.matchState.wonPoints,
//         lostPoints: state.matchState.lostPoints,
//         wonSets: state.matchState.wonSets,
//         lostSets: state.matchState.lostSets,
//         serve: state.initialMatchData.serve,
//         playerTableSide: state.initialMatchData.playerTableSide,
//         setsLimit: state.initialMatchData.howManySets,
//         allPoints: state.matchState.allPoints,
//         allCheckedPlace: state.matchState.allCheckedPlace,
//         playerSetsPoints: state.matchState.playerSetsPoints,
//         opponentSetsPoints: state.matchState.opponentSetsPoints
//   };
  
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//       addWonPoint,
//       addLostPoint,
//       addWonSet,
//       addLostSet,
//       resetWonPoints,
//       resetLostPoints,
//       setServe,
//       addPlayersSetsPoints,
//       addOpponentSetsPoints
//     }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MatchController);