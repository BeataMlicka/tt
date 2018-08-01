import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/index';
import SignInForm from './components/SignInForm/index';

const Landing = () => {

    return (
        <div className="wrapper">
            <div className="wrapper--col-flex landing-page">
                <Logo/>
                <SignInForm/>
                <footer className="col--12">
                    <Link to="/signup">Create new account</Link>
                    <p></p>{/* <Link to="/help"> Need help? </Link> */}
                </footer>
            </div>
        </div>
    );
}

export default Landing;