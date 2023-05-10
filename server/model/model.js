const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name :  {
        type : String,
        required: true
    },

    registrationnumber : {
        type : String,
        
    },
    
    role : {
        type : String,
        
    },

    schoolid :{
        type : String,
        
    },

    gender : {
        type : String,
        
    },

    city : {
        type : String,
        
    }
    
})

const Userdb = mongoose.model('userdb', {

    name :  {
        type : String,
        required: true
    },

    registrationnumber : {
        type : String,
        
    },
    
    role : {
        type : String,
        
    },

    schoolid :{
        type : String,
        
    },

    gender : {
        type : String,
        
    },

    city : {
        type : String,
        
    },

    subject : {
        type : String,
        
    },

    maths_marks : {
        type : String,
        
    },

    science_marks : {
        type : String,
        
    },

    english_marks : {
        type : String,
        
    }


    
});

//const userdb = new userdb();

// let error;
// try {
//   await userdb.save();
// } catch (err) {
//   error = err;
// }

// assert.equal(error.errors['name'].message,
//   'Path `name` is required.');

// error = cat.validateSync();
// assert.equal(error.errors['name'].message,
//   'Path `name` is required.');

module.exports = Userdb;

