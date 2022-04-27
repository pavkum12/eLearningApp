import React from 'react'


import { Link } from 'react-router-dom';

import axios from 'axios';
const baseURL = "http://localhost:4000/api";


class Course extends React.Component {





    state = {
        title: "",
        desc: "",
        course: []
    };

    componentDidMount = () => {
        this.loadData()
    }


    loadData = async () => {

        const getCourses = axios.get(`${baseURL}/getCourse`)
        getCourses.then(data => {
            // console.log(data);
            this.setState({ course: data.data['courseList'] })
            // setcourse(data);

        }).catch(error => {
            console.log(error);
        })
    }



    displayCourse = (course) => {
        console.log(course.length);
        if (!course.length) return null

        return course.map((item) => {
            console.log(`returning ${item.title}`);
            return (
                <div class="card text-center col-sm-3 border-0">
                    <div className='card-header  border-0'>
                        <h3 class="card-title">{item.title}</h3></div>
                    < div class="card-body border-0" id={item._id} >
                        <p class="card-text">{item.description}</p>
                    </div >
                    <div className='card-footer border-0'>
                        <a href="#" class="btn-add-cource0">Download</a>
                    </div>
                </div>
            )
        });
    }



    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                        <Link className="nav-link brand " to="/">
                            <i className="fa-solid fa-square-caret-left text-white"></i>
                        </Link>
                        <h4 className='text-white mx-auto'>Courses</h4>
                    </nav>
                </header>
                {/* <CourseList courses={course} /> */}


                <div className='container text-center'>
                    <h2>Here is the courses available</h2>
                    {console.log(this.state)}
                    <div className='row'>
                        {this.displayCourse(this.state.course)}
                    </div>
                </div>
            </div >
        )
    }
}

export default Course