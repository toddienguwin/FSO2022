const mongoose = require('mongoose')

const schema = mongoose.Schema({
   
    batchID: String,
    name: String,
    shelfName: String,
    cross: String,
    type: String,
    thc: Number,
    cbd: Number,
    terpene: Number,
    createdAt: {
        type: Date,
        required: true,
        default: () => new Date()
    }, 
    rating: {
        type: Number,
        default: () => parseFloat((Math.random() * (5 - 3.5) + 3).toFixed(1)),
    },
    reviewCount: {
        type: Number,
        default: () => Math.floor(Math.random() * 200) + 1
    },
    brandID: String,
    price: {
        type: Number,
        required: true
    },
    manufactured_date: {
        type: String,
        required: true
    },
    packaged_date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Strains', schema)