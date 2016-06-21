var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Picture = new Schema({
    place: {
        type: ObjectId,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

mongoose.model('Picture', Picture).virtual('file')
    .upload((file) => {
       //upload to cloudinary 
    });
    

module.exports = mongoose.model('Picture', Picture);