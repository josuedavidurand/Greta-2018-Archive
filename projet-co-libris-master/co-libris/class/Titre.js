var Manager = require('../class/Manager')

class Titre extends Manager {

    constructor(titre) {

        super(titre);
        // propriété du titre
        this.titre = titre;
        
        // modele du titre
        this.model = require('../models/model_titre.js');

        // hydratation de l'objet
        this.element = new this.model({
            titre: this.titre
        });
    }
}

module.exports = Titre