import React from 'react';
import ResultPDF from '../ResultPDF/index';


const Save = ({ showWindow }) => {

    return(
        <div className="results-save">
            <div className="col--12">
                <img 
                    className="x-icon" src={require('./icons/slim-x.svg')} 
                    onClick = {() => showWindow(false)}
                    alt="X"/>
            </div>
            <div>
                <ResultPDF/>
            </div>
        </div>
    );
}

export default Save;