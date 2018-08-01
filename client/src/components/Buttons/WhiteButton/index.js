import React from 'react';
import { Link } from 'react-router-dom';


const WhiteButton = ({ text, onClick, address }) => {

    return (
        <button type="submit" className="white" onClick = { () => onClick() } >
            <Link to = {address}> {text} </Link>
        </button>
    );
}

export default WhiteButton;