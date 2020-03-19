import React, { useState } from "react"


function HelloWorld() {
    const [count, setCount] = useState(0)
   const incrementCounter= () =>{
    
      setCount ( count=>count+1);
    }
    return (
        <div>         
          <h1>Hey There!!! I'm React Hook Counter</h1>
          <button onClick={()=>setCount ( count=>count+1)}>Count {count}</button>
        </div>
    )
}

export default HelloWorld
