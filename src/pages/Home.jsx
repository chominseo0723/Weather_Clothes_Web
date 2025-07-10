import React from 'react'

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
    </>
  )
}

export default Home