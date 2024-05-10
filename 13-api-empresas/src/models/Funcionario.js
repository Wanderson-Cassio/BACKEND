const mongoose = require('mongoose')

const schema = new  mongoose.Schema(
    {
        nome: {
            type: String,
            require: true
        },
        dataNascimento: {
            type: Date,
            require: true
        },
        email: {
            type: String,
            require: true,
            lowercase: true,
            trim: true,
            unique: true
        },
        cargo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            require: false
        }
    },
    {
        timestamps: true
    }
)

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario