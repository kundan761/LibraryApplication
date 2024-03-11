const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {type:String, required:true},
    author: {type:String, required: true},
    status: {type:String, enum:['Currently Reading', 'Read', 'Want to Read']},
    reviews: [{type:mongoose.Schema.Types.ObjectId, ref : 'Review'}]
},{
    versionKey:false
});

module.exports = mongoose.model('Book', BookSchema);