const express= require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

//mongodb+srv://jaxonflex:<password>@cluster0.wkql7.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://jaxonflex:JnjGdA5baJYA6J93@cluster0.wkql7.mongodb.net/restaurant?retryWrites=true&w=majority')
    .then(()=>{
    console.log('Connected to data base')
    })
    .catch(()=>{
        console.log('connection to database failed');
    });
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,PUT,OPTIONS"
        );
    next();
});