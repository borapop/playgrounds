var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
    
var User = new Schema({
    telegramId: {
        type: Number
    },
    telegramPhoneNumber: {
        type: Number
    },
    username: {
        type: String
    },
    places: {
        type: Array,
        required: true,
        default: []
    },
    locations: {
        type: Array,
        required: true,
        default: []
    }
    
});

module.exports = mongoose.model('User', User);