const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todomodel = require('./Modles/todo')

const app = express();
 app.use(cors());
 app.use(express.json());
 mongoose.connect('mongodb://127.0.0.1:27017/todo')
 .then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


 app.post('/add',(req,resp)=>{
    const task =req.body.task;
    Todomodel.create({
        task:task
    }).then(result=> resp.json(result))
    .catch(err=>resp.json(err))
 })

 app.get('/get',(req,resp)=>{
    Todomodel.find()
    .then(result=>resp.json(result))
    .catch(err=>resp.json(err))
 });

app.put('/update/:id', (req, resp) => {
  const { id } = req.params;
    console.log(id);
  Todomodel.findByIdAndUpdate({_id:id},{done:true})
  .then(result=>resp.json(result))
  .catch(err=>resp.json(err))

});
app.delete('/delete/:id',(req,resp)=>{
   const{id}=req.params;
   Todomodel.findByIdAndDelete({_id :id})
   .then(result=>resp.json(result))
   .catch(err=>resp.json(err))
})


 app.listen(3001,()=>{
    console.log("server is running");
 })