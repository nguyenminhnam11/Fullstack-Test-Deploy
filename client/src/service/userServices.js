import instance from "../api/axios-customer"

export const getUserData = () => {
    return instance.get('/users')
}

export const addUser = (name, email, address) => {
    return instance.post('/user', {name, email, address})
}

export const getUSerById = (id) => {
    return instance.get(`/user/${id}`)
}

export const updateUser = (id, name, email, address) => {
    return instance.put(`/update/user/${id}`, {name, email, address})
}

export const deleteUser = (id) => {
    return instance.delete(`/delete/user/${id}`)
}