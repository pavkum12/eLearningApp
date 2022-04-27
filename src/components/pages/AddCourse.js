import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addCourseAction } from '../../container/actions';
import { Link } from 'react-router-dom';

import AdminAddCource from '../imports/AdminAddCourse';



export default function AddCourse() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();

        const courseDetail = {
            title, description, category
        }

        const addAction = dispatch(addCourseAction(courseDetail))

        addAction.then(data => {
            alert('course title:' + title + '" Description:"' + description + '" Category :"' + category + '"');
            console.log(data)
        }
        ).catch(error => {
            console.log(error)
        });

    }



    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                    <Link className="nav-link brand " to="/AdminDashboard">
                        <i className="fa-solid fa-square-caret-left text-white"></i>
                    </Link>
                    <h4 className='text-white mx-auto'>Add Courses</h4>
                </nav>
            </header>
            <AdminAddCource courseContent={{ handleSubmit, setTitle, setDescription, setCategory }} />
        </div>

    )
}
