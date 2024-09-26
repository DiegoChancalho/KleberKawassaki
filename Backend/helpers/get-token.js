const getToken = (req) =>{
    const autHeader = req.headers.autorizacao
    //Abaixc a função split() do Js pega a String dentro de autHeader e a divide
    //quando encontrar como separador um espaço. Por fim, 
    //considera apenas a segunda parte.
    // um array comecça na posição [0], então [1] é o segundo elemento de um array.
    //o resultado é gravado na variável token.
    const token = autHeader.split(" ")[1]
    return token
}

module.exports = getToken