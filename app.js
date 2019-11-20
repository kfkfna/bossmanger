const express = require('express');
const path = require('path');
const app = express();

const home = require('./route/home');
const admin = require('./route/admin');


app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',admin);
app.use('/home',home);

app.listen(3000);