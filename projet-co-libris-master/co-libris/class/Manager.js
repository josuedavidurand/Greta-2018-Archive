var objMongoose = require('../config/db')

class Manager {

    constructor() {
        // récupération du module de connexion à la base de données
        this.mongoose = objMongoose.mongoose;
    }

    // méthode insert() qui permet d'injecter dans la base de données
    insert() {

        objMongoose.connect();
        
        this.element.save(function (err) {
            if (err) { throw err; }
            console.log('Ajout effectué avec succès !');
            objMongoose.close();
        })
    }
    
    get_list(callback) {

        objMongoose.connect();

        let query = this.model.find(null)
        query.exec(function (err, list) {
            if (err) { throw err; }
            console.log("Affichage de la liste terminé !")
            callback(list)
            objMongoose.close();
        });
    }
}

module.exports = Manager