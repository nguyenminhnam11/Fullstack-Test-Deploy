import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { getUSerById, updateUser } from '../../service/userServices'

export default function Edit() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleUpdate = async (event) => {
        try {
            await updateUser(id, name, email, address)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const getDataUserById = async (userId) => {
        try {
            const res = await getUSerById(userId)
            if (res) {
                setName(res.name)
                setEmail(res.email)
                setAddress(res.address)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataUserById(id)
    }, [id])

    return (
        <>
            <div style={{ width: '500px', margin: '100px auto 0 auto' }}>
                <h2 >Edit user</h2>
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
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Form>
            </div>
        </>
    )
}
