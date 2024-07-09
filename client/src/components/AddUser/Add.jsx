import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../service/userServices'

export default function Add() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleAddUser = async (event) => {
        event.preventDefault();
        try {
            await addUser(name, email, address)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div style={{ width: '500px', margin: '100px auto 0 auto' }}>
                <h2 >Add new user</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                    <Button variant="secondary" onClick={() => navigate('/')} className='me-2'>
                        Back
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleAddUser}>
                        Create
                    </Button>
                </Form>
            </div>
        </>
    )
}
