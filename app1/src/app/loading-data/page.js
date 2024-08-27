"use client"

import { useEffect, useState } from "react";
import Loader from "./loader";

async function myList() {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await data.json();
    return data;
}


const LoadingData = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchData = async()=>{
            let fetchDataUsers = await myList();
            setUser(fetchDataUsers);
            setLoading(false);
        }
        fetchData()
    },[]) 
  return (
    <>
        <h2>Loading Data With Loader in next js 14</h2>
        {
            loading?<Loader/>:(
                users.map((user, i)=>(
                    <h3 key={i}>Name:{user.username}</h3>
                ))
            )
        }
    </>
  )
}

export default LoadingData