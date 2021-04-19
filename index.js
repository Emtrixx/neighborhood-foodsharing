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
    auth.benutzerExistiert(req.body.username, success => {
        if(!success) {
            return res.send("Benutzer existiert nicht");
        } else {
            auth.anmeldungErfolgreich(req.body.username,req.body.password, success => {
                if(success) {
                    return res.send("Anmeldung erfolreich");
                } else {
                    return res.send("Anmeldung fehlgeschlagen");
                }
            })
        }
    }) 
    
})

app.get('/offer', (req,res) => {
    res.render('food/offer');
})

// Error Handling: Not found – Call this last!
app.use(function(req, res) {
    res.status(404).render('error');
});

// Start Server
app.listen('3000', () => {
    console.log("Listening port 3000");
})
