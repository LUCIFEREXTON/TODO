require('dotenv').config({ path: './config.env' });
require('./dbconnect')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoute = require('./Route/auth')
const todoRoute = require('./Route/todo')
const listRoute = require('./Route/list')
const app = express();
const port = process.env.PORT

app.use(cors({
    origin: process.env.CLIENT
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/userauth', authRoute);
app.use('/api/usertodo', todoRoute);
app.use('/api/userlist', listRoute);

app.listen(port, () => console.log(`listening on port ${port}`));