import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addCourseAction } from '../../container/actions';
import { Link } from 'react-router-dom';

import AdminAddCource from '../imports/AdminAddCourse';
import axios from 'axios';




export default function AddCourse() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [selectedimage, setSelectedimage] = useState('')
    const [file, setFile] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();

        let imageUrl = ''
        let fileUrl = ''
        const formData = new FormData();
        formData.append('file', selectedimage)
        formData.append('upload_preset', 'lx3mmnjo')

        axios.post("https://api.cloudinary.com/v1_1/sjbit/image/upload", formData).then((response) => {
            // console.log(response['data'].secure_url);
            imageUrl = response['data'].secure_url


            console.log(imageUrl);
            const fileData = new FormData();
            fileData.append('file', file)
            fileData.append('upload_preset', 'ws6pekcs')
            axios.post("https://api.cloudinary.com/v1_1/sjbit/upload", fileData).then((response) => {
                fileUrl = response['data'].secure_url

                const courseDetail = {
                    title, description, category, imageUrl, fileUrl
                }

                const addAction = dispatch(addCourseAction(courseDetail))

                addAction.then(data => {
                    alert('course title:' + title + '" Description:"' + description + '" Category :"' + category + '"');
                    console.log(data)
                }
                ).catch(error => {
                    console.log(error)
                });
            })

        })






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
            <AdminAddCource courseContent={{ handleSubmit, setTitle, setDescription, setCategory, setSelectedimage, setFile }} />
        </div>

    )
}
