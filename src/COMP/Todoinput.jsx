import React, { useEffect, useState } from 'react'

function Todoinput({fun}) {
    const [data,addData]=useState("");
    let [arr,addarr]=useState([])
    const start=()=>{
      if(data!="")
      {
        addarr([data,...arr])
        addData("")
      }
       
       
    }
    useEffect(()=>{
      // console.log(typeof(arr))
      fun(arr)
    },[arr])
  return (
      <>
         <input value={data} onChange={(e)=>addData(e.target.value)}/>
        <button onClick={start}>+</button>
      </>
     
  )
}
export default Todoinput
