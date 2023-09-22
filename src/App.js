import './App.css';
import Header from "./My Components/Header";
import AddTodo from "./My Components/AddTodo";
import Todos from "./My Components/Todos";
import Footer from "./My Components/Footer";
import About from "./My Components/About";
import React ,{useEffect, useState} from 'react'; 
//import * as React from "react";
//import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  let iniTodo;
  if(localStorage.getItem("todos")===null){
      iniTodo=[];
  }
  else{
      iniTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
  console.log("heyyyyy",todo);
  
  // use state filter function using hookss
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));  
}
// addTodo Function
  const addTodo= (title,descr)=>{
    console.log("I am adding this Todo",title,descr);
    let sno;
    if(todos.length===0){
       sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      descr: descr
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
  }
  
  //use state
  const [todos,setTodos] = useState(
    iniTodo/*{
      sno: 1,
      title: "market",
      descr:"shopping"
    },
    {
      sno: 2,
      title: "shopp",
      descr:"shopping"
    },
    {
      sno: 3,
      title: "ground",
      descr:"criciket"
    },
    {
      sno: 4,
      title: "mall",
      descr:"Visiting"
    },
    {
      sno: 5,
      title: "cafe",
      descr:"coffee"
    },*/
  );
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
   <Router>
    <Header title="My ToDos List" searchbar={false}/>
     <Routes>
        <Route path="/" element={
          <>
           <AddTodo addTodo={addTodo}/>
           <Todos todos={todos} onDelete={onDelete}/>
           </>
     }/>
          <Route path="/About" element={<About />} />
      </Routes>
    <Footer/>
   </Router>
    );
}

export default App;
