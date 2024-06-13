const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false
        },
        cargaHoraria: {
            type: String,
            required: true
        },
        semestre: {
            type: String,
            required: true
        },
        curso: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'curso',
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Disciplina = mongoose.model('disciplina', schema)

module.exports = Disciplina