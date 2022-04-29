import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const baseURL = "http://localhost:4000/api";


class RemoveUpdates extends React.Component {
    state = {
        noti: "",
        update: []
    };

    componentDidMount = () => {
        this.loadData()
    }

    loadData = async () => {

        const getUpdates = axios.get(`${baseURL}/getUpdate`)
        getUpdates.then(data => {
            // console.log(data);
            this.setState({ update: data.data['updateList'] })
            // setcourse(data);

        }).catch(error => {
            console.log(error);
        })
    }

    displayUpdate = (update) => {
        console.log(update.length);
        if (!update.length) return null

        return update.map((item) => {
            console.log(`returning ${item.noti}`);
            return (
                <div class="card text-center col-sm-8 border-0" >
                    < div class="card-body border-0" id={item._id} >
                        <h3 class="card-title">{item.noti}</h3>
                    </div >
                </div >
            )
        });
    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                        <Link className="nav-link brand " to="/AdminDashboard">
                            <i className="fa-solid fa-square-caret-left text-white"></i>

                        </Link>
                        <h4 className='text-white mx-auto'>Here is the UPSE Updates available</h4>
                    </nav>
                </header>
                <div className='container text-center'>
                    <h2></h2>
                    {console.log(this.state)}
                    <div className='row'>
                        {this.displayUpdate(this.state.update)}
                    </div>
                </div>
            </div>
        )
    }
}

export default RemoveUpdates
