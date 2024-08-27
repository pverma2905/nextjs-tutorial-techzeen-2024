'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Contact = () => {
    const router = useRouter();
    return (
        <>
            <h2>Contact</h2>
            {/* <Link href="/home">Home</Link> */}
            <Link href="/contact/employee">Contact Employee</Link>
            <br/>
            <button onClick={()=>router.push('/contact/company')}>Contact Company</button>
        </>

    )
}

export default Contact