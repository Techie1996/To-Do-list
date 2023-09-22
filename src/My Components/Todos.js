import React from 'react'
import TodoItem from "./TodoItem"
export default function ToDos(props) {
  let myStyle={
    minHeight: "70vh",
    margin: "11px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-4">To Do List</h3>
      {props.todos.length===0?"No Todos To Display Here":
      props.todos.map((todo)=>{
        return (
        <>
        <TodoItem todo={todo} onDelete={props.onDelete}/>
        <hr/>
        </>
        )
      })}
    </div>
  )
}

