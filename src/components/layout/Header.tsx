import React from 'react'
import HeaderImage from '/public/img/home/party-img.jpg'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <div className='w-full h-[30rem] relative block items-center justify-center'>
    <Image src={HeaderImage} alt="" className='w-full h-[30rem] object-cover filter brightness-50' />
    <div className="absolute top-1/3 lg:ml-20 ml-5 text-white">
        <h1 className='text-5xl font-bold'>Make Your Party The Next Big Thing</h1>
        <p className='mt-3 mb-5'>Discover local artisans and performers, and unearth inspiration for any event—grand or intimate</p>
        <Button className="bg-[#FDA50F] text-white">Get Started</Button>
    </div>
</div>
  )
}
