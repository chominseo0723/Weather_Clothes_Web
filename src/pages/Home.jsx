import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='flex px-8 flex-col bg-black text-white'>
       <span className='text-xl font-bold'>WF</span>
       <form className=''>
        <input type='search' className='bg-white w-400 my-3 rounded-md px-3 py-2' 
        placeholder='현재 날씨에 맞는 옷 찾기'/>
       </form>
       <ul className='flex flex-row gap-3 mb-3'>
        <li className='hover:font-bold'>추천</li>
        <li className='hover:font-bold'>랭킹</li>
        <li className='hover:font-bold'>세일</li>
       </ul>
    </div>
       <div className='flex gap-5 justify-center mt-100 '>
        <Link to='/minprice' className='border py-1 px-3 rounded-lg border-gray-300'>오늘의 최저가</Link>
        <Link to='/timesale' className='border py-1 px-3 rounded-lg  border-gray-300'>타임세일</Link>
        <Link to='/freedrive' className='border py-1 px-3 rounded-lg  border-gray-300'>무료배송</Link>
        <Link to='/random' className='border py-1 px-3 rounded-lg  border-gray-300'>꽝 없는 뽑기</Link>
       </div>
    <span className='flex mt-20 ml-10 text-2xl font-bold'>날씨별 종목 추천</span>
    </>
  )
}

export default Home