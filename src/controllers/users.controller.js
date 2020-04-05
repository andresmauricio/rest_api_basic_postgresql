const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '',
    host: 'localhost',
    database: 'restapibasica'
});

async function getUsers(req, res) {
    const query = 'SELECT * FROM persons';
    const result = await pool.query(query);
    res.status(200).json(result.rows);
}

async function getUser(req, res) {
    const { id } = req.params;
    const query = 'SELECT * FROM persons WHERE id = $1';
    const value = [id];
    const result = await pool.query(query, value);
    res.status(200).json(result.rows[0]); 
}

async function createUser(req, res) {
    const { username, email } = req.body;
    const query = 'INSERT INTO persons(id, username, email) VALUES (DEFAULT, $1, $2)';
    const values = [username, email];
    await pool.query(query, values);    
    res.status(201).json(true);
}

async function updateUser(req, res) {
    const { id } = req.params;
    const { username, email } = req.body;
    const query = 'UPDATE persons SET username = $1, email = $2 WHERE id = $3';
    const values = [username, email, id];
    await pool.query(query, values);
    res.json(true);
}

async function deleteUser(req, res) {
    const { id } = req.params;
    await pool.query('DELETE FROM persons WHERE id= $1', [id]);
    res.json({status: true, idDelete: id});
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}