import React from 'react';



const SimpleTableItem = ({ background, showTableSchema, markBallsPlace }) => {

    function onClickFunctions(){
        showTableSchema();
        markBallsPlace();
    }

    return(

        <div className = { `simple-table-item ${background}` } onClick = {() => onClickFunctions()}>
        </div>
    );
}

export default SimpleTableItem;