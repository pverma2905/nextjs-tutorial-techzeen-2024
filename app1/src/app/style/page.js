"use client"

import { useState } from "react"

const StyleWithNextJS = () => {
    const [style, setSyle] = useState({backgroundColor:'aqua'})
  return (
    <>
        <h2>Style With Next JS 14</h2>
        {/* <h3 style={{backgroundColor:'red'}}>Hello</h3> */}
        <h3 style={style}>Hello</h3>
        <button onClick={()=>setSyle({backgroundColor:'yellow'})}>Change Color</button>
    </>
  )
}

export default StyleWithNextJS