import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-gray-900 py-5 flex justify-center'>
     <Link to='/'>
        <h1 className='text-white text-2x1 font-bold hover:scale-110 transition-all duration-500'>Quiz App</h1>
     </Link>
    </header>
  )
}

export default Navbar