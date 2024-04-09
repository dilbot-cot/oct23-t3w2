// console.log("Terminal app is running");

// console.log("Bye bye, terminal app finished");

require('dotenv').config()
const pokemonPrinterFile = require("./pokemonPrinter");

console.log(process.env.S3_BUCKET)
pokemonPrinterFile.pokemonPrinter()