const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    
    'img':{
        type:String ,
        required: true
    },
    "name":{
        type:String ,
        required: true
    },
    "email":{
        type:String ,
        required: true
    },
    "address":{
        type:String ,
        required: true
    },
   
})


const User= model("User",UserSchema)

module.exports = User