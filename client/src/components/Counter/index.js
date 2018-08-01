import React from 'react';


const Counter = ({wonPoints, lostPoints, wonSets, lostSets, playerTableSide}) => {

    function changeSite(){
        if(playerTableSide === 'upper'){
            return 'counter--content--reverse';
        } else {
            return '';
        }
    }

    return (

        <div className="counter">
            <div className={`counter--content ${changeSite()} col--12 col-center`}>

                <div className="counter--sets col--2">
                    <div className="counter--sets--item active col--6">0</div>
                    <div className="counter--sets--item active col--6">{wonSets}</div>
                </div>
                <div className="counter--points col--4">
                    <div className="counter--points--item active col--6">{Math.floor(wonPoints/10)}</div>
                    <div className="counter--points--item active col--6">{wonPoints-(Math.floor(wonPoints/10)*10)}</div>
                </div>
                <div className="counter--points counter--points--item">:</div>
                <div className="counter--points col--4">
                    <div className="counter--points--item col--6">{Math.floor(lostPoints/10)}</div>
                    <div className="counter--points--item col--6">{lostPoints-(Math.floor(lostPoints/10)*10)}</div>
                </div>
                <div className="counter--sets col--2">
                    <div className="counter--sets--item col--6">0</div>
                    <div className="counter--sets--item col--6">{lostSets}</div>
                </div>
            </div>
            {/* <div className="counter--buttons col--12">
                <div className="counter--buttons--actions red-text col--6">
                    Zakończ mecz
                </div>
                <div className="counter--buttons--line"></div>
                <div className="counter--buttons--actions orange-text col--6">
                    Zakończ seta
                </div>
            </div> */}
        </div>
    );
}

export default Counter;