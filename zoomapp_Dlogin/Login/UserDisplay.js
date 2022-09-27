import React from 'react';
import { Link } from "react-router-dom";

const UserDisplay = (props) => {

    const renderTable = ({usersData}) => {
        if(usersData){
            return usersData.map((item) => {
                return(
                    <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.role}</td>
                </tr>
                )
            })
        }
    }
    return(
        <div className="">
            <center><h3>Orders</h3></center>

            <Link to="/profile" className="btn btn-info">Profile</Link>
            <table className="table">
                <thead>
                    <tr>
                    <th>id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>Role</th>

                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDisplay;