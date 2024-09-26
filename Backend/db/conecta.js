const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/brunolanches')
    console. log ("Conectando ao MongoDB")
}

main().catch((erro)=>console.log(erro))

module.exports = mongoose