const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: false
    }
})
const Produto = mongoose.model('produto', schema)

module.exports = Produto