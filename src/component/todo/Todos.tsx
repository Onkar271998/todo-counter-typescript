import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import axios, { AxiosResponse } from "axios";
import TodoItem from './TodoItem';
// import TodoItem from './TodoItem';


type InputCreateTodo={
  content:string;
  isCompleated:boolean
}
type Todo={
  id:number;
  content:string;
  isCompleated:boolean;
}

 const getTodo= async()=>{
  
  let response : AxiosResponse<Todo[]> = await axios.get ("http://localhost:8080/todos");
    return response.data;
 }

 
 const postTodo= async(params:InputCreateTodo)=>{
  
  let response:AxiosResponse<Todo> = await axios.post("http://localhost:8080/todos",
     params
  );
  return response.data;
 }

  




function Todos() {
   const [todos,setTodos]=useState<Todo[]>([])

   

   useEffect(()=>{
    getTodo().then((d)=>{
      setTodos(d)
    })
   },[])

   const addNewTodo=(content:string)=>{
    if(content){
       postTodo({content, isCompleated:false}).then((d)=>{
        setTodos([...todos, d])
      })
    }
   }



  

  return (
    
    <div>
  
  <h1>todo</h1>

<TodoInput onAdd={addNewTodo}/>
  {
    todos.map((todo)=>( 
        <TodoItem key={todo.id}{...todo} />
    ))}
  

       
</div>

  );
 
}

export default Todos;