"use client"
const MyPost = ({data}) => {
  return (
    <>
        <button onClick={()=>alert(data)}>Click Me</button>
    </>
  )
}

export default MyPost