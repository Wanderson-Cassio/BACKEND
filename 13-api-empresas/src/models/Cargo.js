const mongoose = require('mongoose')

const schema = new  mongoose.Schema(
    {
        nome: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo