import Link from 'next/link'
import React from 'react'

const Employees = () => {
  return (
    <>
    <h2>Employees</h2>
    <ul>
        <li>
        <Link href="/employees/test1">Test1</Link>
        </li>
        <li>
        <Link href="/employees/test2">Test2</Link>
        </li>
        <li>
        <Link href="/employees/test3">Test3</Link>
        </li>        
    </ul>
    </>
  )
}

export default Employees