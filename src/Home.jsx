import React, { useEffect, useState } from 'react'
import Create from './Create';
import axios from 'axios';
import { FaRegCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Home = () => {
const [todos,setTodo]=useState([]);
useEffect(()=>{
    axios.get('http://localhost:3001/get')
    .then(result=>setTodo(result.data))
    .catch(err=>console.log(err))
},[])

const handlecheck= (id)=>{
  axios.put('http://localhost:3001/update/'+id)
    .then(result=>{location.reload()})
    .catch(err=>console.log(err))
}

const handleDelete=(id)=>{
  axios.delete('http://localhost:3001/delete/'+id)
    .then(result=>{location.reload()})
    .catch(err=>console.log(err))
}

  return (
    <div className='home'>
      <h1>Todo list</h1>
      <Create/>
      {
       todos.length ===0 ? 
        <div><h2>No Recode</h2></div>
        :
        (todos.map(todo=>
            <div className='works'>
              <button className='check' onClick={()=>handlecheck(todo._id)}>{todo.done ? <FaCheck/>:<></>}</button>
               <p className={todo.done ? "line_through":""} >{todo.task}</p>
               <button className='delete' onClick={()=>handleDelete(todo._id)}>Delete</button>
            </div>
        ))
      }
    </div>
  )
}

export default Home
