import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-transparent ">
                <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/my-web" >{props.tittle}</Link>

                <button className="navbar-toggler outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse text-start" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto flex-nowrap">
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="text-white" aria-current="page" to="/my-web" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="active" to="/my-web/allprojects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="active" to="/my-web/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="active" to="/my-web/contact">Contact</Link>
                    </li>
                    </ul>
                    {/*props.searchBar? <form className="d-flex">
                    <input className="form-control btn-secondary me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
    </form> : <h6 className="text-white">No Search Bar</h6>*/}
                </div>
                </div>
            </nav>
        </div>
    )
}
Header.defaultProps = {
    tittle: "Your Tittle Here",
    searchBar : true
}
Header.propTypes = {
    tittle: propTypes.string,
    searchBar: propTypes.bool.isRequired
}