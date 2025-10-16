// Arquivo de todas as rotas dos job.
const express = require('express') // Chamar o express.
const router = express.Router() // Chamar o objeto de rotas do express.
const Job = require('../models/Job')

router.get('/test', (req, res) => {
    res.send("Deu certo.")
})

// Criação de um JOB via POST.
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, new_job} = req.body

    // Inserir dados no sistema.
    Job.create({
        title,
        description,
        salary,
        comapany,
        email,
        new_job
    })
    .then(() => res.redirect('/')) // "Then" -> quando der certo, vai direcionar para home ('/')
    .catch(err => console.log(err))
})