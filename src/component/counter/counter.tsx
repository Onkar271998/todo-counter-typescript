import React, { useState } from 'react'

function Counter() {
    const[Count,SetCount]= useState<number>(0);
  return (
    <>
    <div>counter:{Count}</div>
    <div>

        <button onClick={()=>SetCount(Count+1)}>+</button>
        <button onClick={()=>SetCount(Count-1)}>-</button>
    </div>
    </>
  )
}

export default Counter