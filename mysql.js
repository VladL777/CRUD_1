const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "test_db",
    password: "12345"
})


const getUser = (req, res) => {
    conn.query(`SELECT * FROM users WHERE id = "${req.params.id}"`, (err, rows) => {
        res.json(rows[0])
    })
}

const getUsers = (res) => {
    conn.query(`SELECT * FROM users`, (err, rows) => {
        res.json(rows)
    })
}

const addUser = (req, res) => {
    conn.query(`INSERT INTO users (name, sec_name, age, sex, mail) values ("${req.body.name}", "${req.body.sec_name}", "${req.body.age}", "${req.body.sex}", "${req.body.mail}");`, (err, rows) => {
        res.json(rows)
    })
}

const deleteUser = (req, res) => {
    conn.query(`DELETE FROM users WHERE id = "${req.params.id}"`, (err, rows) => {
        res.json(rows)
    })
}

const updateUser = (req, res) => {
    let query = ''
    if (req.body.name) query += `SET name="${req.body.name}"`
    if (req.body.sec_name) query += `, sec_name="${req.body.sec_name}"`
    if (req.body.age) query += `, age="${req.body.age}"`
    if (req.body.sex) query += `, sex="${req.body.sex}"`
    if (req.body.mail) query += `, mail="${req.body.mail}"`
    conn.query(`UPDATE users ${query} WHERE id=${req.body.id}`, (err, rows) => {
        res.json(rows)
    })
}

module.exports = { getUser, getUsers, addUser, deleteUser, updateUser }