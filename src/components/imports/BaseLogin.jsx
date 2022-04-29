import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom';

export default function BaseLogin() {

    const location = useLocation();
    const history = useHistory();

    let defaultClass = "nav-link link-btn btn-primary default-bg";
    let active = " active"

    const register = () => history.push("/register")
    const login = () => history.push("/login")
    const admin = () => history.push('/admin')


    return (
        <div className="col-sm-5 bg-img align-self-center">
            <div className="info">
                <div className="logo clearfix">
                    <Link className="nav-brand" to="/">UPSC</Link>
                </div>
                <div className="btn-section clearfix">
                    <button onClick={login} className={location.pathname === "/login" ? defaultClass + active : defaultClass}>Login</button>
                    <button onClick={register} className={location.pathname === "/register" ? defaultClass + active : defaultClass}>Register</button>
                    <button onClick={admin} className={location.pathname === "/admin" ? defaultClass + active : defaultClass}>Admin</button>
                </div>
            </div>
        </div>
    )
}
