import React from 'react'
import { TiHeart } from "react-icons/ti";
export default function Footer() {
  return (
    <div className='w-full flex flex-col items-center mt-2'>
      <p className='text-[#4070f4] flex items-center gap-1 font-bold'><span>Made With</span><span className='text-red-500 text-[22px]'><TiHeart /></span><span>by <a target='_blank' href="https://manishkumarjha.me">Manish</a></span></p>
    </div>
  )
}