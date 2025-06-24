const mongoose = require('mongoose')

const Todoschema = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const Todomodel = mongoose.model("Todolist",Todoschema)
module.exports=Todomodel