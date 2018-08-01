import React from 'react';
import { Link } from 'react-router-dom';

const GoogleButton = ({ text, onClick }) => {

    return (
            <button type="submit" className="google" onClick = { () => onClick() } >
                <img className="google-icon" src={require('./icons/google-plus-symbol.svg')} alt=""/>
                <Link to = "/auth/google"> {text} </Link>
            </button>
    );
}

export default GoogleButton;