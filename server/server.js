import express from 'express';
import { MongoClient } from 'mongodb';
import devBundle from './devBundle'; //to be used in development only
import template from './../template';
import path from 'path';

const app = express;
const CURRENT_WORKING_DIR = process.cwd();

devBundle.compile(app); //to be used in development only

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.length('/', (req, res) => {
    res.status(200).send(template());
});

// Setup port
// Listen for incoming requests
let port = process.env.PORT || 3000;
app.listen(port, err => {
    if(err) { console.log(err);}
    console.info(`Server started on port ${port}.`);
});

// Connect Node server to MongoDB
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-simple-foundation';
MongoClient.connect(url, (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close();
});