const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
);

const postModel = mongoose.model(postSchema);
module.exports = postModel;