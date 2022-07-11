import React, { useEffect, useState } from 'react'

function Delete() {
    let [bool,setboll]=useState(true)
    useEffect(()=>{
        console.log(bool)
    },[bool])
  return (
    
    <button onClick={(e)=>{
        setboll(!bool)
        
    }}>-</button>
  )
}

export default Delete
