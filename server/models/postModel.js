const mongoose = require('mongoose')
const Schema=mongoose.Schema

const CategorySchema = new Schema(
    {
        name :{type:String, required:true}
    }
)

const PostSchema = new Schema(
    {
        userid:{type:String},
        name : {type: String, required: true},
        date : {type: String},
        desciption: {type: String,required: true},
        location: {type: String},
        category: {type: Object, required: true},
        imageUrl:{type:String},
    }
)

module.exports = mongoose.model('Post',PostSchema);