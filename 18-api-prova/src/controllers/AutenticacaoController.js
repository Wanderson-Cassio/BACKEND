require('dotenv').config()
const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer') // Biblioteca que mandará um email de boas-vindas para quem se registrou

const JWT_SECRET = process.env.JWT_SECRET

async function registrar(req, res) {
    // #swagger.tags = ['Autenticacao']

    const { nome, email, senha } = req.body

    const usuarioExiste = await Usuario.findOne({ email })
    if (usuarioExiste) {
        return res.status(400).json({ mensagem: "usuário já existe!" })
    }

    const hash = await bcrypt.hash(senha, 10)

    const usuario = new Usuario({
        nome,
        email,
        senha: hash
    })

    await usuario.save()

    // Com o usuário devidamente registrado, agora usaremos o nodemailer para enviar um email de boas-vindas.

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

try {
    await transporter.sendMail({
        from: process.env.EMAIL_USER, 
        to: email, // Envia o e-mail para o novo usuário registrado
        subject: "Seja bem-vindo!",
        text: "Estudar é abrir mão de momentos de descanso agora para ter muito mais alegrias no futuro. O conhecimento é a arma mais poderosa para alcançar a realização pessoal."
    })
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })
} catch (error) {
    console.error('Erro ao enviar email!', error)
    res.status(500).json({ mensagem: "Erro ao enviar email de boas-vindas" })
}
}

async function login(req, res) {
    // #swagger.tags = ['Autenticacao']

    const { email, senha } = req.body

    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
        return res.status(401).json({ mensagem: "Usuário não cadastrado!" })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha)

    if (!senhaValida) {
        return res.status(401).json({ mensagem: "usuário ou senha inválidos!" })
    }

    const token = jwt.sign({ email: usuario.email }, JWT_SECRET, { expiresIn: '56m' })

    res.json(
        {
            mensagem: "Login efetuado com sucesso!",
            token
        }
    )
}






module.exports = {
    registrar,
    login
}