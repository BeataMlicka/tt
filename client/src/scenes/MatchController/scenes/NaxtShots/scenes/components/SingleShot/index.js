import React from 'react';



const SingleShot = ({name, addWonPoint, addLostPoint}) => {

    return(
        <div className="single-shot">
            <div className = "single-shot--name">
                <h4>{name}</h4>
            </div>
            <div className = "single-shot--button">
                <button className="won-point" onClick = {() => addWonPoint()}>
                    <p>V</p>
                </button>
            </div>
            <div className = "single-shot--button">
                <button className="lost-point" onClick = {() => addLostPoint()}>
                    <p>X</p>
                </button>
            </div>
        </div>
    );
}

export default SingleShot;