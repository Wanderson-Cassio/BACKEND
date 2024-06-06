const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: false
        },
        disciplinas: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Professor = mongoose.model('professor', schema)

module.exports = Professor