
## Dévelopement

### Dépendances

- nodejs
- npm
- mongodb

### Utilisation

#### Linux

```
$ cd co-libris
$ npm install
$ mongod --dbpath "../bdd_mongodb_colibris"
```
Ouvrer un nouveau terminal, pour  lancé le serveur avec :
```
$ npm run start
```
Puis aller dans le navigateur à l'adresse `http://localhost:8080/docu_recherche`

#### Windows

```
$ cd co-libris
$ npm install
```
Lancé le `.bat` et coriger les liens vers l'executable `mongod.exe` et le chemin de la base de donnée.
Ouvrer un nouveau terminal, pour  lancé le serveur avec :
```
$ npm run start
```
Puis aller dans le navigateur à l'adresse `http://localhost:8080docu_recherche`
