const express = require('express')
const cors = require('cors')
const app = express()
const ClienteRoutes = require('./routes/ClienteRoutes')

//Configuração de resposta do JSON
app.use(express.json())
app.use(cors({credentiais: true, origin:'http://localhost:3000'}))

app.use(express.static('public'))

/* HABILITAR USO DE ROTAS PELO EXPRESS*/
app.use('/clientes',ClienteRoutes)

app.listen(5000) 