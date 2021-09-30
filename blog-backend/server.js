const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// app 
const app = express();

//connect to database;
mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('DB Connected'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());


if(process.env.NODE_ENV == 'development') {
    app.use(cors({origin: process.env.CLIENT_URL}));
}

app.get('/api', (req, res) => {
    res.json({time: Date().toString()})
})
 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Sever is running on ${port}`);
});