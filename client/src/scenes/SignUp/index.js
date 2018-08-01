import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/index';
import SignUpForm from './components/SignUpForm/index';

const SignUp = () => {

    return (
        <div className="wrapper">
            <div className="wrapper--col-flex signup-page">
                <Logo/>
                <SignUpForm/>
                <footer className="col--12">
                    {/* <Link to="/signup"> Create new account </Link> */}
                    <p></p>{/* <Link to="/help"> Need help? </Link> */}
                </footer>
            </div>

        </div>
    );
}

export default SignUp;