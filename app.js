const express    = require('express') // Chamar o express.
const app        = express() // Invoca o express e criar um servidor pra ele.
const db         = require('./db/connection')  // Criar a constante do banco de dados
const bodyParser = require('body-parser')

// Iniciar o servidor com uma porta.
const PORT = 3000

// Fazer com que o app escute a porta.
app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`) 
})

// Utilizando o body-parser.
app.use(bodyParser.urlencoded({extended: false}))

// Conexeção (DB)
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso!")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar.", err)
    })

// Criação de uma rota. (url)
app.get('/', (req, res) => {
    res.send("Está funcionando corretamente!")
})

// Rotas Job
app.use('/jobs', require('./routes/jobs'))