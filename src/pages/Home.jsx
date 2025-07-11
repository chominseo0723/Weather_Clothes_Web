import axios from 'axios'
import React, { useState, useEffect } from 'react'   
import { Link } from 'react-router-dom'

const Home = () => {
  const [weather, setWeather] = useState([])

  const getWeather = async () => {
    try {
      const response = await axios.get(
  '/kma/api/typ01/url/kma_sfcdd.php?tm=20150715&stn=0&help=0&authKey=Z1vkWsEaRFOb5FrBGrRTWA'
)

      setWeather(response.data)
      console.log(response)
      console.log('axios의 get 메서드로 데이터 받아오기 성공')
    } catch (error) {
      console.error('데이터 요청 실패:', error)
    }
  }     
  useEffect(() => {         
     getWeather()                    
  }, [])

  return (
    <>
    <div className='flex px-8 flex-col bg-black text-white'>
       <span className='text-xl font-bold'>WF</span>
       <form className=''>
        <input type='search' className='bg-white placeholder-gray-500 w-400 my-3 rounded-md px-3 py-2' 
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