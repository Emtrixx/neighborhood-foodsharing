const express = require("express");
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html');
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname+'/login.html');
})

app.listen('3000', () => {
    console.log("Listening port 3000");
})