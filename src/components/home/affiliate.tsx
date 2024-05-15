import React from 'react'
import VectorOne from '/public/img/affiliate/signup.png'
import VectorTwo from '/public/img/affiliate/vendor.png'
import VectorThree from '/public/img/affiliate/earn.png'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Affiliate() {
  return (
    <div className='text-center bg-[#FDA50F] text-white py-20 mt-20'>
        <h1 className='font-bold text-3xl'>Are you an Affiliate?</h1>
        <h3 className='font-bold'>Maximize your earnings and join our Affiliate Program today!</h3>

        <div className="grid grid-cols-3 justify-center mt-8">
        <div className="flex flex-col items-center">
          <Image src={VectorOne} alt="" className='w-20 h-16' />
          <h1 className='mt-2'>Sign Up</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={VectorTwo} alt="" className='w-20 h-16' />
          <h1 className='mt-2'>Refer Vendors</h1>
        </div>
        <div className="flex flex-col items-center">
          <Image src={VectorThree} alt="" className='w-20 h-16' />
          <h1 className='mt-2'>Earn together</h1>
        </div>
      </div>
        
        <Button className="px-9 bg-transparent border border-white mt-5">Learn More</Button>
    </div>
  )
}
