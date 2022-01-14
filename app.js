const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const router = require('./routes/managmenet');

app.use(methodOverride('_method', {methods: ['POST', 'GET']}));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/Students_DB', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', router);

// Port
// app.listen(3000, ()=>console.log('express started!'));
// if(process.env.NODE_ENV === "test") app.set("port", 3001);
// else app.set("port", process.env.PORT || 3000);
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:
    ${app.get("port")}`);
});