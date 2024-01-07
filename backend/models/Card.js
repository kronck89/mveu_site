const {Schema, model} = require('mongoose')

const Card = new Schema({
    cardnumber: {
        type: Number
    },
    carddate: {
        type: Number
    },
    cardcvc: {
        type: Number
    }
})

module.exports = model('Card', Card)