const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
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
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Professor = mongoose.model('professor', schema)

module.exports = Professor