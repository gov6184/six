import React, { useEffect, useState } from 'react'
import Todoinput from './Todoinput'
import TodoList from './TodoList'

function TodoApp() {
  let [dataa,setdataa]=useState([])
  const fun=(elem)=>{
    setdataa(elem)
  }
  const made=(val)=>{
    
    
    
  }
  useEffect(()=>{
    //  console.log(dataa[0],dataa)
  },[dataa])
  return (
    <div>
      <h2>TodoApp</h2>
      <Todoinput fun={fun}/>
      <TodoList data={dataa}/>
     
    </div>
  )
}

export default TodoApp
