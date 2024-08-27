'use client'
import { useEffect, useState } from "react"

const page = () => {
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    async function getUsers() {
      const usersData = await fetch('https://jsonplaceholder.typicode.com/users')
      setUsers(await usersData.json())
    }
    getUsers()
  },[])
  return (
    <>
    <h2>UserList | Fetch Data With Api</h2>
    {
      users.map((user)=><li key={user.id}>{user.username}</li>)
    }
    </>
  )
}

export default page