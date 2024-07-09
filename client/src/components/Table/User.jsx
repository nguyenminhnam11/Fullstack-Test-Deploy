import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import './User.css'
import { deleteUser, getUserData } from '../../service/userServices';
import { Link } from 'react-router-dom';

export default function User() {
    const [userData, setUserData] = useState([])

    const fetchUserData = async () => {
        try {
            const res = await getUserData()
            setUserData(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const handleDelete = async (id) => {
        try {
            await deleteUser(id)
            // setUserData(userData.filter(user => user._id !== id))
            fetchUserData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='userTable'>
            <Link to={'/add'}><Button variant='primary mb-4'><i className="fa-solid fa-user-plus"></i></Button></Link>

            {userData && userData.length > 0 ? 
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userData.map((user, index) => (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Link to={`/edit/${user._id}`}><Button variant='warning me-3' ><i className="fa-solid fa-pen-to-square"></i></Button></Link>
                                    <Button variant='danger' onClick={() => handleDelete(user._id)}><i className="fa-solid fa-trash"></i></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
                :
                <h3>Not found user</h3>}


        </div>
    )
}
