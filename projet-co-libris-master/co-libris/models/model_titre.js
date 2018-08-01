var objMongoose = require('../config/db')
var Schema = objMongoose.mongoose.Schema;

let titreSchema = new Schema({
    titre: String
},
    {
        versionKey: false
    });

module.exports = objMongoose.mongoose.model('titres', titreSchema);  