const express = require("express");
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate');

const auth = require("./utils/authentication.js");

app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req,res) => {
    res.render('home');
})

app.get('/login', (req,res) => {
    res.render('user/login');
})

app.post('/login', (req,res) => {
    console.dir(req.body)
    if(auth.anmeldungErfolgreich(req.body.benutzername,req.body.passwort)){
        res.send("Yes")
    } else {
        res.send("No")
    }
})

app.listen('3000', () => {
    console.log("Listening port 3000");
})
