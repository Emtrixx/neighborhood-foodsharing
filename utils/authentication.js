const DATABASE = "foodsharing.db";
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(DATABASE);

module.exports = {
    
    benutzerExistiert: function (username, callback) {
        db.all(
            'SELECT * FROM users',
             function (err, rows) {
                for (b of rows) {
                    if (b.username == username) {
                        return callback(true)
                    }
                }
                callback(false);
            }
        )
    },

    anmeldungErfolgreich: function (username, password, callback) {
        db.all(
            'SELECT * FROM users',
            function (err, rows) {
                for (b of rows) {
                    if (b.username == username) {
                        return callback(b.password == password);
                    }
                };
                callback(false);
            }
        )
    },

    // benutzerHinzufuegen: function (username, password) {
    //     const neuerBenutzer = {
    //         username,
    //         password
    //     }
    //     benutzer.push(neuerBenutzer);
    //     console.log(benutzer);
    // }
}
// const benutzer = [
//     {
//         username: "Alice",
//         password: "§$Y45/912v"
//     },
//     {
//         username: "Bob",
//         password: "secret"
//     },
//     {
//         username: "Carla",
//         password: "123"
//     },
//     {
//         username: "David",
//         password: "divaD"
//     }
// ]