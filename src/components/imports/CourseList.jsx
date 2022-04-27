import React from 'react'

export default function CourseList(props) {


    const { title, description, category } = props.course

    return (
        <div className='container'>
            <table >
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                    </tr>
                </tbody>






            </table>
        </div >


    )

}
