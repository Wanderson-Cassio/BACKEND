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
        telefone: {
            type: String,
            required: false
        },
        departamento: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'departamento',
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Professor = mongoose.model('professor', schema)

module.exports = Professor