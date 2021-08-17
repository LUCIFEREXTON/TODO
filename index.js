require('dotenv').config({ path: './config.env' });
require('./dbconnect')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
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
app.use((req, res, next) => {
    // console.log(req.body);
    next()
})
app.use('/api/userauth', authRoute);
app.use('/api/usertodo', todoRoute);
app.use('/api/userlist', listRoute);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`listening on port ${port}`));
