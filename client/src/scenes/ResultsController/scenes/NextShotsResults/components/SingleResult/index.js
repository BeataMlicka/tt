import React from 'react';
import { calculatePointsPercentage } from './../../../../../../functions/results';


const SingleResult = ({ name, wonBall, lostBall, showFullResultsWindow, setActiveBall }) => {

    let allBall = wonBall + lostBall;

    function onClick(){
        setActiveBall();
        showFullResultsWindow(true);
    }

    return(
        <div className="single-result col--12 row-flex">
            <div className="name col-center col--4">
                <p>{ name }</p>
            </div>
            <div className="col--4 row-flex">
                <div className="col-center col--6">
                    <p className="perc green-text">
                        { calculatePointsPercentage(allBall, wonBall) }
                    </p>
                </div>
                <div className="col-center col--6">
                    <p className="perc red-text">
                        { calculatePointsPercentage(allBall, lostBall) }
                    </p>
                </div>
            </div>
            <div 
                className="col-center col--4"
                onClick = { () => onClick() }>
                <img className="table-icon" src={require('./icons/ping-pong-table.svg')} alt=""/>
            </div>
        </div>
    );
}

export default SingleResult;