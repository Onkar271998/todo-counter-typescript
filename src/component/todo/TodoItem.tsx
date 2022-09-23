import React from 'react'



type TodoProps={
  id:number;
  content: string;
  isCompleated:boolean
}
const TodoItem=({content,isCompleated}:TodoProps)=> {
  return (
    <div>{content}-{isCompleated ?"compleated":"In Complete"}</div>
  )
}

export default TodoItem