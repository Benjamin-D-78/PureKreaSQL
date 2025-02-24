const dotenv = require("dotenv")
dotenv.config()
// Grâce à ça on va pouvoir aller chercher les variables qui se trouvent dans notre fichier ".env", et on va les stocker dans notre objet ci-dessous :

const ENV = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    DIALECT: process.env.DIALECT,
    TOKEN: process.env.TOKEN
}

module.exports = ENV; // On exporte pour pouvoir appeler dans nos autres fichiers.