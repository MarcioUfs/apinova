const express = require('express')
const observacao = require('./models/Observacao')
const app = express()
const port = 7070
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({ titulo: "Artigo" })
})
app.post('/observa', (req, res) => {
    observacao.create({
        nome: req.body.nome,
        observacao_coluna: req.body.obs,
        chave: req.body.chave
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send("Cadastro nao realizado!")
    })
})

app.listen(port, () => {
    console.log("Sevidor ON!!! NA PORTA : " + port)
})