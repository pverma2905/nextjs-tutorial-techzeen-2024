import React, { useState } from 'react'


const EventsFunctionState = () => {
  const [firstname, setFirstName] = useState('pranav')
  // const sayHello = (name)=>{
  //   alert(`Hello ${name}`)
  // }

  // let firstname = 'pranav';

  const changeName = ()=>{
    // firstname="verma"
    setFirstName('amit')
  }
  return (
    <>
    <h2>Events Function And State</h2>
    {/* <button onClick={()=>alert('Hello')}>Click Me</button> */}
    {/* <button onClick={()=>sayHello('pranav')}>Click Me</button> */}

    <h3>My name is: {firstname}</h3>
    <button onClick={changeName}>Click Me</button>
    </>
  )
}

export default EventsFunctionState