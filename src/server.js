const express = require('express');
const UsersRoutes = require('./routes/users.routes');
const app = express();

// Middelwares
app.use(express.json());    

// Routes 
app.use('/api/users/', UsersRoutes);

module.exports = app;
