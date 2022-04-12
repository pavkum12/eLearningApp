import React, { useEffect } from 'react'


import Header from '../imports/Header';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

export default function Home() {

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
                <div className="container-fluid h-40">
                    <h4>Welcome to Home Page</h4>
                </div>
                <div className='container text-center'>
                    <Link className="nav-brand" to="/Course">
                        <button className="btn btn-primary">Courses</button>
                    </Link>
                    <Link className="nav-brand" to="/News">
                        <button className="btn btn-primary">News</button>
                    </Link>
                    <Link className="nav-brand" to="/Updates">
                        <button className="btn btn-primary">Updates</button>
                    </Link>
                </div>
            </main>
        </>
    )
}
