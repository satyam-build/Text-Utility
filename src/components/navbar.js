import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
function Navbar(props) {
    let textcolor='text-dark';
    let Theme = 'Enable';
    if(props.mode==='dark'){
        textcolor = 'text-light';
        Theme = 'Disable';
    }
    
    return (
        <div>
            {/* <h2>This is a great list of china</h2> */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                           
                        </ul>
                        
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
                                <label className={`form-check-label ${textcolor}`} htmlFor="flexSwitchCheckChecked">{Theme} Dark mode</label>
                            {/* We have used if else above to change the color of text just above this statement, but we can use if-else or ternary operator directly into the 
                            {`form-check-label ${textcolor}`} to change color of text as per switch function like : {`form-check-label ${textcolor==='light'?'text-dark':'text-light'}`} */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.number.isRequired
    // isRequired means you have to pass the value of it otherwise it will show error, but it can be resolved by giving a default propType
};

Navbar.defaultProps = {
    title: "Satya",
    aboutText: 12324
}

export default Navbar;