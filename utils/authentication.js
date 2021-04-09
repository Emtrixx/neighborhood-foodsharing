module.exports = {
    
    benutzerExistiert: function (benutzername) {
        for (b of benutzer) {
            if (b.benutzername == benutzername) {
                return true;
            }
        }
        return false;
    },

    anmeldungErfolgreich: function (benutzername, passwort) {
        for (b of benutzer) {
            if (b.benutzername == benutzername) {
                return b.passwort == passwort;
            }
        };
        return false;
    },

    benutzerHinzufuegen: function (benutzername, passwort) {
        const neuerBenutzer = {
            benutzername,
            passwort
        }
        benutzer.push(neuerBenutzer);
        console.log(benutzer);
    }
}
const benutzer = [
    {
        benutzername: "Alice",
        passwort: "§$Y45/912v"
    },
    {
        benutzername: "Bob",
        passwort: "secret"
    },
    {
        benutzername: "Carla",
        passwort: "123"
    },
    {
        benutzername: "David",
        passwort: "divaD"
    }
]