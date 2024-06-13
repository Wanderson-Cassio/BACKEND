const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        telefone: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Departamento = mongoose.model('departamento', schema)

module.exports = Departamento