import React from 'react'

import { Link } from 'react-router-dom';
import Logout from './Logout';

import { logoutAction } from '../../container/actions';
import { useDispatch } from 'react-redux';

export default function Header() {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutAction());
    }

    const myFunction = () => {
        var x = document.getElementById("navbarNav");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                <Link className="nav-link brand mx-auto">
                    <h5 className="text-light m-0">Welcome  {localStorage.getItem('username') == null ? "Guest" : localStorage.getItem('username').charAt(0).toUpperCase() + localStorage.getItem('username').substring(1,)}</h5>
                </Link>
                <button className="navbar-toggler" type="button" onClick={myFunction} data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="me-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item active text-center">
                            <Logout onLogout={logout}></Logout>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
