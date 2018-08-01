var objMongoose = require('../config/db')
var Schema = objMongoose.mongoose.Schema;

let collegeSchema = new Schema({
    nom_college: String,
    adresse: String,
    code_postal: String,
    ville: String
},
    {
        versionKey: false
    });

module.exports = objMongoose.mongoose.model('colleges', collegeSchema); 