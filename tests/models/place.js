var Place = require('../../models/place');
var db = require('../../models/db');
var assert = require('assert');
var mongoose = require('mongoose');
var id = mongoose.Types.ObjectId();

describe('Place model actions', () => {
    
    it('Should create new place', () => {
        var place = new Place({
           name: 'test',
           author: id,
           lat: '123',
           lon: '1245',
           type: 'shit',
           edited: Date()
        });
        
        place.save((err, place) => {
            assert.equal(null, err, err);
            assert.equal('test', place.name);
        });
    });
    
    it('Should find place with name \"test\"', () => {
        Place.findOne({name: 'test'}, (err, place) => {
            assert.equal(null, err, err);
            assert.equal(place.name, 'test');
        });   
    });
    
    it('Sould edit place with name \"test\"', () => {
        Place.findOneAndUpdate({name: 'test'},
            {type: 'stupid shit'}, (err, place) => {
            assert.equal(null, err, err);
            assert.equal(place.name, 'test');
            assert.equal(place.type, 'stupid shit');
            
        });   
    })
    
    it('Should remove place with name \"test\"', () => {
       Place.remove({name: 'test'}, (err) => {
           assert.equal(err, null, 'error with place.remove');
       }) 
    });
})