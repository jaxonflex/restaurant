const mongoose =require('mongoose');

const menuDataSchema = mongoose.Schema({
    categories:[
        {category:String},
        [{itemTitle:String,itemDetails:String,itemPrice:String,}]
    ]
})