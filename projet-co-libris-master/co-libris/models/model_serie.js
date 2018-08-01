var objMongoose = require('../config/db')
var Schema = objMongoose.mongoose.Schema;

let serieSchema = new Schema({
    titre: String,
    auteur: String,
    editeur: String,
    collection_edition: String,
    isbn: String,
    date_parution: String,
    quantite: String,
    langue: String,
    lien_image: String,
    college_proprietaire:
        {
            id_college: String,
            nom_college: String,
            ville_college: String
        }  
},
    {
        versionKey: false
    });

module.exports = objMongoose.mongoose.model('series', serieSchema);