import React from 'react'
import VectorOne from '/public/img/why/one.png'
import VectorTwo from '/public/img/why/two.png'
import VectorThree from '/public/img/why/three.png'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function WhyGigresource() {
  return (
    <div className='text-center bg-[#FDA50F] text-white py-20 mt-20'>
        <h1 className='tracking-wide text-4xl font-bold py-5'>WHY GIGREOUSRCE</h1>
        <div className="grid lg:grid-cols-3 mx-auto text-center justify-center items-center mt-8 px-20 gap-5">
        <div className="w-full flex flex-col items-center">
            <Image src={VectorOne} alt='' className='w-12 h-12' />
            <h1 className='font-bold text-xl'>1. HIRE VERIFIED PROS</h1>
            <p>Connect with carefully verified vendors. Browse profiles and compare rates and services. Choose what your party needs.</p>
        </div>
        <div className="w-full flex flex-col items-center">
            <Image src={VectorTwo} alt='' className='w-12 h-12' />
            <h1 className='font-bold text-xl'>2. POST PROJECTS FOR FREE</h1>
            <p>Our marketplace of pros can be overwhelming. Post a project to narrow down the options. Fast, simple, and easy!</p>
        </div>
        <div className="w-full flex flex-col items-center">
            <Image src={VectorThree} alt='' className='w-12 h-12' />
            <h1 className='font-bold text-xl'>3. PAY WITH PROTECTION</h1>
            <p>Avoid scams by making sure every payment is protected. Enjoy safe and secure party planning–you deserve it.</p>
        </div>
        </div>

        <Button className="px-9 bg-transparent border border-white mt-5">SignUp</Button>
    </div>
  )
}
