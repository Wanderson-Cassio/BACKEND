const yup = require('yup')
const jwt = require('jsonwebtoken')

const   JWT_SECRET = process.env.JWT_SECRET

const usuarioSchema = yup.object().shape({
    nome: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    email: yup
        .string('campo precisa ser um texto')
        .email('e-mail inválido')
        .required('campo obrigatório'),
    senha: yup
        .number('campo precisa ser um numero')
        .required('campo obrigatório')
})


function usuarioValidador(req, res, next) {
    cargoSchema
        .validate(req.body, { abortEarly: false })
            .then(() => next())
            .catch(err => {
                const errors = err.inner.map(e => {
                    const erro = {
                        campo: e.path,
                        erros: e.errors
                    }
                    return erro
                })
                res.status(400).json(
                    {
                        mensagem: "Falha na validação dos campos",
                        erros: errors
                    }
                )
            })
}

const loginSchema = yup.object().shape({
    email: yup
        .string('campo precisa ser um texto')
        .email('e-mail inválido')
        .required('campo obrigatório'),
    senha: yup
        .number('campo precisa ser um numero')
        .required('campo obrigatório')
})


function loginValidador(req, res, next) {
    cargoSchema
        .validate(req.body, { abortEarly: false })
            .then(() => next())
            .catch(err => {
                const errors = err.inner.map(e => {
                    const erro = {
                        campo: e.path,
                        erros: e.errors
                    }
                    return erro
                })
                res.status(400).json(
                    {
                        mensagem: "Falha na validação dos campos",
                        erros: errors
                    }
                )
            })
}

async function checarToken(req, res) {
    try {
        const authorizationHeader = req.get(authorization)
        const separator = authorizationHeader.split(' ')
        const token = separator[1]
        
        jwt.verify(token. JWT_SECRET)
    } catch (error) {
        return res.status(401).json({mensagem: ""})
    }
}


module.exports = {
    usuarioValidador,
    loginValidador
}