class Connect {

    constructor() {
        this.mongoose = require('mongoose');
    }

    connect() {
        this.mongoose.connect('mongodb://localhost:27017/colibris', function (err) {
            if (err) { throw err; }
            console.log("Connecter à la base de données")
        });
    }
    close() {
        this.mongoose.connection.close();
        console.log("Déconnexion")
    }
}

let connection = new Connect;
module.exports = connection


