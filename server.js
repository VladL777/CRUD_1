const express = require('express')
const { getUser, getUsers, addUser, deleteUser, updateUser } = require('./mysql')

const app = express()
app.use(express.json())

app.get('/user/:id', (req, res) => {
    getUser(req, res)
})

app.get('/users', (req, res) => {
    getUsers(res)
})

app.post('/user', (req, res) => {
    addUser(req, res)
})

app.delete('/user/:id', (req, res) => {
    deleteUser(req, res)
})

app.put('/user', (req, res) => {
    updateUser(req, res)
})

app.listen(3000, () => console.log('server started.'))