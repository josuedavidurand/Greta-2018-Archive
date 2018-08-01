let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')

let app = express()


// Moteur de template
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: 'azedbnvgntehsfz', saveUnitialized: true, cookie: { secure: false } }))
app.use(require('./middlewares/flash'))

// function
function cleanUpSpecialChars(str) {
    str = str.replace(/é|è|ê/g, "e");
    return str;
}

//Routes

// API pour l'autocomplete
app.get('/search', (request, response) => {

    var parametre = request.query["term"].toLowerCase();
    var new_parametre = cleanUpSpecialChars(parametre);

    let class_serie = require('./class/Serie')
    let series = new class_serie()
    series.get_list(function (series) {
        let tab_titres = []

        if (series.length == 1) {
            let titre = series[0].titre;
            let test_titre = cleanUpSpecialChars(titre.toLowerCase());
            if (test_titre.indexOf(new_parametre) >= 0) {
                tab_titres.push(titre);
            }
        } else if (series.length > 1) {
            for (let i = 0; i < series.length; i++) {
                let titre = series[i].titre;
                let test_titre = cleanUpSpecialChars(titre.toLowerCase());
                if (test_titre.indexOf(new_parametre) >= 0) {
                    tab_titres.push(titre);
                }
            }
        }
        let result = tab_titres;
        response.send(result, {
            'Content-Type': 'application/json'
        }, 200);
    });
})

//GET
app.get('/docu_recherche', (request, response) => {

    /*let class_titre = require('./class/Titre')
    let newTitre = new class_titre();
    newTitre.get_list(function (titres) {
         response.render('pages/docu_recherche', { titres: titres })
     });*/
     
    response.render('pages/docu_recherche')
})
app.get('/docu_echange', (request, response) => {
    response.render('pages/docu_echange', { test: 'allez on peut continuer' })
})
app.get('/docu_addSerie', (request, response) => {
    response.render('pages/docu_addSerie', { test: 'allez on peut continuer' })
})
app.get('/docu_gestionSerie', (request, response) => {
    response.render('pages/docu_gestionSerie', { test: 'allez on peut continuer' })
})

//POST

// ajout d'une serie
app.post('/docu_addSerie', (request, response) => {
    if (request.body.titre === undefined ||
        request.body.auteur === undefined ||
        request.body.editeur === undefined ||
        request.body.collection_edition === undefined) {
        request.flash('error', "Il manque une information importante")
        response.redirect('/docu_addSerie')
    } else {
        let class_serie = require('./class/Serie')
        let newSerie = new class_serie(request.body.titre, request.body.auteur, request.body.editeur, request.body.collection_edition, request.body.isbn, request.body.parution, request.body.quantite, request.body.langue, request.body.lien_image, request.body.id_college, request.body.nom_college, request.body.ville_college, )
        newSerie.insert()
        response.redirect('/docu_addSerie')
    }
})

// module de recherche d'une série
app.post('/docu_recherche', (request, response) => {
    if (request.body.recherche === undefined || request.body.recherche === '') {
        request.flash('error', "Vous n'avez pas entrez de titre de livre")
        response.redirect('/docu_recherche')
    } else {
        let parametre = request.body.recherche.toLowerCase();
        var new_parametre = cleanUpSpecialChars(parametre);

        let class_serie = require('./class/Serie')
        let series = new class_serie()
        series.get_list(function (series) {

            let tab_series = []

            if (series.length == 1) {
                let titre = series[0].titre;
                let test_titre = cleanUpSpecialChars(titre.toLowerCase());
                if (test_titre.indexOf(parametre) >= 0) {
                    tab_series.push(series[0]);
                }
            } else if (series.length > 1) {

                for (let i = 0; i < series.length; i++) {

                    let newSerie = series[i];
                    let titre = newSerie.titre;
                    let test_titre = cleanUpSpecialChars(titre.toLowerCase());
                    if (test_titre.indexOf(parametre) >= 0) {
                        tab_series.push(newSerie);
                    }
                }
            }
            response.render('pages/docu_recherche', { tab_series: tab_series })
        });
    }
})
app.listen(8080)