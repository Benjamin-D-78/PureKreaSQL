console.log("Démarrage du serveur...")

const express = require("express")
const ENV = require("./config")

const app = express()

// IMPORTATION DES ROUTES


// PORT
const PORT = ENV.PORT || 8080

// MIDDLEWARES


// PREFIXES


// SERVER
const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Serveur exécuté sur le port http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Erreur lors de la synchronisation de la BDD : ", error.message);

    }
}
startServer();