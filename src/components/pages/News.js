import React from 'react'

import { Link } from 'react-router-dom';



export default function News() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                <Link className="nav-link brand " to="/">
                    <i className="fa-solid fa-square-caret-left text-white"></i>

                </Link>
                <h4 className='text-white mx-auto'>News</h4>
            </nav>
        </header>
    )
}
