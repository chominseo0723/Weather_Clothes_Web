import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className='flex flex-row justify-between bg-black text-white p-3'>
        <div id='left-bar' className='flex gap-3'>
            <Link to='/'>WF</Link>
            <Link to='/about'>About</Link>
        </div>
        <div id='right-bar' className='flex gap-3'>
            <Link to='/mypage'>마이페이지</Link>
            <Link to='/save'>장바구니</Link>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar