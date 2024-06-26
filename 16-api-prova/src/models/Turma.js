const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        turno: {
            type: String,
            required: false
        },
        curso: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'curso',
            required: false
        },
        disciplina: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'disciplina',
            required: false
        },
        professor: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'professor',
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Turma = mongoose.model('turma', schema)

module.exports = Turma