const express = require('express')
const app = express()
const port = 3000

// Midaleware -> Intermediario
app.use('/',(req, res, next) => {
    console.log("PASSOU NO INTERMEDIARIO")
    console.log("Data: " + Date.now())
    next()
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World')
})

app.post('/aluno', (req, res) =>{
    console.log(req.body)
    res.send('OK')
})

app.listen(port, () => {
    console.log("Aplicação iniciando em http://Localhost:3000")
})