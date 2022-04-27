import React, { useEffect } from 'react'


import Header from '../imports/Header';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';


export default function AdminDashboard() {

    const user = useSelector(state => state.isLoggedIn);
    const history = useHistory()

    const route = () => {
        const token = localStorage.getItem('x-access-token')
        return token ? true : false
    }

    useEffect(() => {
        if (!route()) {
            history.push('/login')
        }
    }, [route, history])


    return (
        <>
            <Header></Header>
            <main>

                <div className='container text-center main-menu'>
                    <Link className="nav-brand" to="/AddCourse">
                        <button className="menu-button" id='add-cource'>Add Courses</button>
                    </Link>
                    <Link className="nav-brand" to="/AddAdmin">
                        <button className="menu-button" id='add-admin'>Add Admin</button>
                    </Link>
                    <Link className="nav-brand" to="/AddUpdates">
                        <button className="menu-button" id='update'>Update</button>
                    </Link>
                </div>
            </main>
        </>
    )
}
