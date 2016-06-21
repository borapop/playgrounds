var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
    
var Place = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    created: {
        type: Date,
        default: Date(),
        requried: true
    },
    edited: {
        type: Date,
        required: true
    },
    author: {
        type: ObjectId,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Place', Place);