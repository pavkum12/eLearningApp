import React from 'react'

export default function UpdateList(probs) {
    const { noti } = probs.update
    return (
        <div className='container'>
            <table >
                <thead>
                    <th>Notification</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{noti}</td>

                    </tr>
                </tbody>
            </table>
        </div >
    )
}
