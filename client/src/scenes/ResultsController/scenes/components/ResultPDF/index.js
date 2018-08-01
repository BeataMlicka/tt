import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetMatchState, resetInitialData, resetTablePlaces } from '../../../../../actions/index';
import * as jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { calculatePointsPercentage, countElements, calculateTableAreasResults } from '../../../../../functions/results';
import WhiteButton from '../../../../../components/Buttons/WhiteButton/index';


class MyDocument extends Component {

      constructor(){
        super();

        this.state = {       
        }
      }


      nextShotsResultsToPDF(){
        
        const names = `${this.props.playerName} - ${this.props.opponentName}`;
        const info = `${this.props.eventName} - ${this.props.date}`;
        const allFirst = (this.props.wonFirstBall + this.props.lostFirstBall);
        const firstBallWonPercent = calculatePointsPercentage(allFirst, this.props.wonFirstBall);
        const firstBallLostPercent = calculatePointsPercentage(allFirst, this.props.lostFirstBall);
        const allSecond = (this.props.wonSecondBall + this.props.lostSecondBall);
        const secondBallWonPercent = calculatePointsPercentage(allSecond, this.props.wonSecondBall);
        const secondBallLostPercent = calculatePointsPercentage(allSecond, this.props.lostSecondBall);
        const allThird = (this.props.wonThirdBall + this.props.lostThirdBall);
        const thirdBallWonPercent = calculatePointsPercentage(allThird, this.props.wonThirdBall);
        const thirdBallLostPercent = calculatePointsPercentage(allThird, this.props.lostThirdBall);
        const allFourth = (this.props.wonFourthBall + this.props.lostFourthBall);
        const fourthBallWonPercent = calculatePointsPercentage(allFourth, this.props.wonFourthBall);
        const fourthBallLostPercent = calculatePointsPercentage(allFourth, this.props.lostFourthBall);
        const allFifth = (this.props.wonFifthBall + this.props.lostFifthBall);
        const fifthBallWonPercent = calculatePointsPercentage(allFifth, this.props.wonFifthBall);
        const fifthBallLostPercent = calculatePointsPercentage(allFifth, this.props.lostFifthBall);
        const allSixth = (this.props.wonSixthBall + this.props.lostSixthBall);
        const sixthBallWonPercent = calculatePointsPercentage(allSixth, this.props.wonSixthBall);
        const sixthBallLostPercent = calculatePointsPercentage(allSixth, this.props.lostSixthBall);
        const allSeventh = (this.props.wonSeventhBall + this.props.lostSeventhBall);
        const seventhBallWonPercent = calculatePointsPercentage(allSeventh, this.props.wonSeventhBall);
        const seventhBallLostPercent = calculatePointsPercentage(allSeventh, this.props.lostSeventhBall);
        const allEighth = (this.props.wonEighthBall + this.props.lostEighthBall);
        const eighthBallWonPercent = calculatePointsPercentage(allEighth, this.props.wonEighthBall);
        const eighthBallLostPercent = calculatePointsPercentage(allEighth, this.props.lostEighthBall);

        const allShortBh = this.props.wonShortBh.length + this.props.lostShortBh.length;
        const allShortMid = this.props.wonShortMid.length + this.props.lostShortMid.length;
        const allShortFh = this.props.wonShortFh.length + this.props.lostShortFh.length;
        const allLongBh = this.props.wonLongBh.length + this.props.lostLongBh.length;
        const allLongMid = this.props.wonLongMid.length + this.props.lostLongMid.length;
        const allLongFh = this.props.wonLongFh.length + this.props.lostLongFh.length;

        var result = '';

        const sets = this.props.playerSetsPoints.length;
        for(var i = 0; i < sets; i++){
          var set = `(${this.props.playerSetsPoints[i]}/${this.props.opponentSetsPoints[i]})`;

          result = `${result} ${set}`
        }

        const matchResults = `Wynik meczu: ${this.props.wonSets} : ${this.props.lostSets}   Sety: ${result}`

        //First table data

        var matchResultsLegend = [
          {title: "Name", dataKey: "name"},
          {title: "All", dataKey: "all"},  
          {title: "Won", dataKey: "won"}, 
          {title: "Won percent", dataKey: "wonPercent"}, 
          {title: "Lost", dataKey: "lost"}, 
          {title: "Lost percent", dataKey: "lostPercent"} 
        ];

        var matchResultsValues = [
          {"name": "first ball", "all": `${allFirst}`,
            "won": `${this.props.wonFirstBall}`, "wonPercent": `${firstBallWonPercent}`,
            "lost": `${this.props.lostFirstBall}`, "lostPercent": `${firstBallLostPercent}`},
          {"name": "second ball", "all": `${allSecond}`,
            "won": `${this.props.wonSecondBall}`, "wonPercent": `${secondBallWonPercent}`,
            "lost": `${this.props.lostSecondBall}`, "lostPercent": `${secondBallLostPercent}`},
          {"name": "third ball", "all": `${allThird}`,
            "won": `${this.props.wonThirdBall}`, "wonPercent": `${thirdBallWonPercent}`,
            "lost": `${this.props.lostThirdBall}`, "lostPercent": `${thirdBallLostPercent}`},
          {"name": "fourth ball", "all": `${allFourth}`,
            "won": `${this.props.wonFourthBall}`, "wonPercent": `${fourthBallWonPercent}`,
            "lost": `${this.props.lostFourthBall}`, "lostPercent": `${fourthBallLostPercent}`},
          {"name": "fifth ball", "all": `${allFifth}`,
            "won": `${this.props.wonFifthBall}`, "wonPercent": `${fifthBallWonPercent}`,
            "lost": `${this.props.lostFifthBall}`, "lostPercent": `${fifthBallLostPercent}`},
          {"name": "sixth ball", "all": `${allSixth}`,
            "won": `${this.props.wonSixthBall}`, "wonPercent": `${sixthBallWonPercent}`,
            "lost": `${this.props.lostSixthBall}`, "lostPercent": `${sixthBallLostPercent}`},
          {"name": "seventh ball", "all": `${allSeventh}`,
            "won": `${this.props.wonSeventhBall}`, "wonPercent": `${seventhBallWonPercent}`,
            "lost": `${this.props.lostSeventhBall}`, "lostPercent": `${seventhBallLostPercent}`},
          {"name": "eighth ball", "all": `${allEighth}`,
            "won": `${this.props.wonEighthBall}`, "wonPercent": `${eighthBallWonPercent}`,
            "lost": `${this.props.lostEighthBall}`, "lostPercent": `${eighthBallLostPercent}`},
        ];

        //Second table data
        var areasResultsLegend = [
          {title: "Name", dataKey: "name"},
          {title: "All", dataKey: "all"},  
          {title: "Won", dataKey: "won"}, 
          {title: "Won percent", dataKey: "wonPercent"}, 
          {title: "Lost", dataKey: "lost"}, 
          {title: "Lost percent", dataKey: "lostPercent"} 
        ];

        var areasResultsValues = [
          {"name": "short Bh", "all": `${allShortBh}`,
            "won": `${this.props.wonShortBh.length}`, 
            "wonPercent": `${calculatePointsPercentage(allShortBh, this.props.wonShortBh.length)}`,
            "lost": `${this.props.lostShortBh.length}`, 
            "lostPercent": `${calculatePointsPercentage(allShortBh, this.props.lostShortBh.length)}`},
          {"name": "short Mid", "all": `${allShortMid}`,
            "won": `${this.props.wonShortMid.length}`, 
            "wonPercent": `${calculatePointsPercentage(allShortMid, this.props.wonShortMid.length)}`,
            "lost": `${this.props.lostShortMid.length}`, 
            "lostPercent": `${calculatePointsPercentage(allShortMid, this.props.lostShortMid.length)}`},
          {"name": "short Fh", "all": `${allShortFh}`,
            "won": `${this.props.wonShortFh.length}`, 
            "wonPercent": `${calculatePointsPercentage(allShortFh, this.props.wonShortFh.length)}`,
            "lost": `${this.props.lostShortFh.length}`, 
            "lostPercent": `${calculatePointsPercentage(allShortFh, this.props.lostShortFh.length)}`},
          {"name": "long Bh", "all": `${allLongBh}`,
            "won": `${this.props.wonLongBh.length}`, 
            "wonPercent": `${calculatePointsPercentage(allLongBh, this.props.wonLongBh.length)}`,
            "lost": `${this.props.lostLongBh.length}`, 
            "lostPercent": `${calculatePointsPercentage(allLongBh, this.props.lostLongBh.length)}`},
          {"name": "long Mid", "all": `${allLongMid}`,
            "won": `${this.props.wonLongMid.length}`, 
            "wonPercent": `${calculatePointsPercentage(allLongMid, this.props.wonLongMid.length)}`,
            "lost": `${this.props.lostLongMid.length}`, 
            "lostPercent": `${calculatePointsPercentage(allLongMid, this.props.lostLongMid.length)}`},
          {"name": "long Fh", "all": `${allLongFh}`,
            "won": `${this.props.wonLongFh.length}`, 
            "wonPercent": `${calculatePointsPercentage(allLongFh, this.props.wonLongFh.length)}`,
            "lost": `${this.props.lostLongFh.length}`, 
            "lostPercent": `${calculatePointsPercentage(allLongFh, this.props.lostLongFh.length)}`}
        ];
        //Third table data

        var tableAreasLegend = [
          {title: "Action name", dataKey: "name"},
          {title: `${'Short Bh'}${'\n'}(${'won | lost'})`, dataKey: "shortBh"}, 
          {title: `${'Short Mid'}${'\n'}(${'won | lost'})`, dataKey: "shortMid"},
          {title: `${'Short Fh'}${'\n'}(${'won | lost'})`, dataKey: "shortFh"},
          {title: `${'Long Bh'}${'\n'}(${'won | lost'})`, dataKey: "longBh"},
          {title: `${'Long Mid'}${'\n'}(${'won | lost'})`, dataKey: "longMid"},
          {title: `${'Long Fh'}${'\n'}(${'won | lost'})`, dataKey: "longFh"}
        ];

        var tableAreasResults = [
          {"name": "first ball", 
          "shortBh": calculateTableAreasResults('firstBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('firstBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('firstBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('firstBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('firstBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('firstBall', this.props.wonLongFh, this.props.lostLongFh)
          },
          {"name": "second ball", 
          "shortBh": calculateTableAreasResults('secondBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('secondBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('secondBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('secondBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('secondBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('secondBall', this.props.wonLongFh, this.props.lostLongFh)
          },
          {"name": "third ball", 
          "shortBh": calculateTableAreasResults('thirdBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('thirdBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('thirdBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('thirdBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('thirdBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('thirdBall', this.props.wonLongFh, this.props.lostLongFh)
          },
          {"name": "fourth ball", 
          "shortBh": calculateTableAreasResults('fourthBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('fourthBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('fourthBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('fourthBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('fourthBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('fourthBall', this.props.wonLongFh, this.props.lostLongFh)
          },
          {"name": "fifth ball", 
          "shortBh": calculateTableAreasResults('fifthBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('fifthBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('fifthBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('fifthBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('fifthBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('fifthBall', this.props.wonLongFh, this.props.lostLongFh)
          },
          {"name": "sixth ball", 
          "shortBh": calculateTableAreasResults('sixthBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('sixthBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('sixthBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('sixthBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('sixthBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('sixthBall', this.props.wonLongFh, this.props.lostLongFh)
          },
          {"name": "seventh ball", 
          "shortBh": calculateTableAreasResults('seventhBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('seventhBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('seventhBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('seventhBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('seventhBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('seventhBall', this.props.wonLongFh, this.props.lostLongFh)
          },
          {"name": "eighth ball", 
          "shortBh": calculateTableAreasResults('eighthBall',this.props.wonShortBh, this.props.lostShortBh),
          "shortMid": calculateTableAreasResults('eighthBall', this.props.wonShortMid, this.props.lostShortMid),
          "shortFh": calculateTableAreasResults('eighthBall', this.props.wonShortFh, this.props.lostShortFh),
          "longBh": calculateTableAreasResults('eighthBall', this.props.wonLongBh, this.props.lostLongBh),
          "longMid": calculateTableAreasResults('eighthBall', this.props.wonLongMid, this.props.lostLongMid),
          "longFh": calculateTableAreasResults('eighthBall', this.props.wonLongFh, this.props.lostLongFh)
          }         
        ];
       
        // Only pt supported (not mm or in)
        var doc = new jsPDF('p', 'pt', 'a4');

        doc.setFontSize(16);
        doc.text(names, 40, 50);
        doc.setFontSize(13);
        doc.text(info, 40, 70);
        doc.setFontSize(11);
        doc.text(matchResults, 40, 105);

        //First table 

        doc.autoTable(matchResultsLegend, matchResultsValues, {
          theme: 'grid', // 'striped', 'grid' or 'plain'
          styles: {
            fillColor: [255, 255, 255],
            lineColor: 0,
            fontSize: 9
          },
          headerStyles: {
            lineWidth: 1,
            lineColor: 0,
            fontSize: 9,
            fontStyle: 'normal',
            fillColor: [100, 255, 255],
            textColor: 0
          },
          bodyStyles: {},
          alternateRowStyles: {
            //fillColor: [255, 0, 0]
          },
          columnStyles: {},

          margin: {top: 125},
          addPageContent: function(data) {

          }
        });

        //Second table

        doc.autoTable(areasResultsLegend, areasResultsValues, {
          theme: 'grid', // 'striped', 'grid' or 'plain'
          styles: {
            fillColor: [255, 255, 255],
            lineColor: 0,
            fontSize: 9
          },
          headerStyles: {
            lineWidth: 1,
            lineColor: 0,
            fontSize: 9,
            fontStyle: 'normal',
            fillColor: [100, 255, 255],
            textColor: 0
          },
          bodyStyles: {},
          alternateRowStyles: {
            //fillColor: [255, 0, 0]
          },
          columnStyles: {},

          margin: {top: 330},
          addPageContent: function(data) {

          }
        });       

        //Third table

        doc.autoTable(tableAreasLegend, tableAreasResults, {
          theme: 'grid', // 'striped', 'grid' or 'plain'
          styles: {
            fillColor: [255, 255, 255],
            lineColor: 0,
            fontSize: 9
          },
          headerStyles: {
            lineWidth: 1,
            lineColor: 0,
            fontSize: 9,
            fontStyle: 'normal',
            fillColor: [100, 255, 255],
            textColor: 0
          },
          bodyStyles: {},
          alternateRowStyles: {
            //fillColor: [255, 0, 0]
          },
          columnStyles: {},

          margin: {top: 490},
          addPageContent: function(data) {

          }
        });

        doc.save('table.pdf');

        this.resetData();
      }
    
      resetData(){
        this.props.resetInitialData();
        this.props.resetMatchState();
        this.props.resetTablePlaces();
      }

      render() {
        return (
          <div className="pdf-results">
              <header>
                <h2>
                  Save the test results:
                </h2>
              </header>
              <div>
                <WhiteButton text='Download PDF' onClick={() => this.nextShotsResultsToPDF()} address="/"/>
              </div>
          </div>
        );
      }
}

function mapStateToProps(state){
  
  return {
    playerName: state.initialData.playerName,
    opponentName: state.initialData.opponentName,
    eventName: state.initialData.eventName,
    date: state.initialData.date,
    wonSets: state.matchState.wonSets,
    lostSets: state.matchState.lostSets,
    playerSetsPoints: state.matchState.playerSetsPoints,
    opponentSetsPoints: state.matchState.opponentSetsPoints,

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
    resetInitialData,
    resetMatchState,
    resetTablePlaces
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDocument);