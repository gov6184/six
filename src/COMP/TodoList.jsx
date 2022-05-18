import React, { useState } from 'react'
import Delete from './Delete';

export default function TodoList({data}) {
    
  return (
    <div>
        {
            data.map((elem)=>{
                return(
                    <>
                        <h4 key={Math.random()}>{elem}</h4>
                        {/* <Delete/> */}
                    </>
                    
                );
            })
        }
        
    </div>
  )
  
}
