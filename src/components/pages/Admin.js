
import React, { useState } from 'react'
import BaseLogin from '../imports/BaseLogin';
import AdminForm from '../imports/AdminForm';

import { useDispatch, useStore } from 'react-redux';
import { adminLoginAction } from '../../container/actions';
import { useHistory } from 'react-router-dom';

export default function Admin() {
    // {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setError] = useState("")

    const dispatch = useDispatch()
    const store = useStore()
    const history = useHistory()

    // handle Submit handler function
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted');
        const userCredential = {
            email,
            password
        }
        console.log(userCredential);
        // const userdata = { email: "dmin@gmail.com", password : "admin123"}
        const login = dispatch(adminLoginAction(userCredential))
        login
            .then(data => history.push('/AdminDashboard'))
            .catch(error => setError(error.err))

        // console.log(store.getState())
        // console.log(userCredential);
    }

    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin />
                    <AdminForm adminLoginState={{ handleSubmit, setEmail, setPassword, errorMessage, setError }} />
                </div>
            </div>
        </div>
    )
}
