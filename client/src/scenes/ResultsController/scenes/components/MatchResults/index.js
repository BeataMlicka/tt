import React from 'react';


const MatchResults = ({ wonSets, lostSets, playerSetsPoints, opponentSetsPoints }) => {

    function renderSetsResults(){

        var value = 0;

        return(
            <div>
                <div className="match-results--bar row-flex">
                    {playerSetsPoints.map(player => 
                        <div className="match-results--item" key={value++}>
                            {player}
                        </div>)}
                </div>
                <div className="match-results--bar row-flex">
                    {opponentSetsPoints.map(opponent => 
                        <div className="match-results--item" key={value++}>
                            {opponent}
                        </div>)}
                </div>
            </div>
        );

    }

    return(
        <div className="match-results col--12">
            {/* {console.log(wonSets)}
            {console.log(lostSets)}
            {console.log(playerSetsPoints)}
            {console.log(opponentSetsPoints)} */}
            <div className="col--4 col-center">
                <h3>Wynik:</h3>
                <p>
                    <span>{wonSets}</span>
                    <span>:</span>
                    <span>{lostSets}</span>
                </p>
            </div>
            <div className="match-results--content col--8 col-center">
                {renderSetsResults()}
            </div>
        </div>
    );
}

export default MatchResults;