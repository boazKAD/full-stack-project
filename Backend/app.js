const express = require('express');
const cors = require('cors');
const app = express(); 
const router = require('./routes/transactions');
const db = require('./db/db');

require('dotenv').config();

const PORT = process.env.PORT 

app.get('/', function(req, res) {
    res.send('Hello, world');
})

// middlewares
app.use(express.json());
app.use(cors());
app.use('/v1', router);





const server = () =>{
    db();
    app.listen(PORT, () =>{
    console.log('you are listening on port: ', PORT);
    })
}
server();