import React from 'react'
import VectorOne from '/public/img/ten-book/Frame.png'
import VectorTwo from '/public/img/ten-book/Vector-1.png'
import VectorThree from '/public/img/ten-book/Vector-2.png'
import VectorFour from '/public/img/ten-book/Vector-3.png'
import VectorFive from '/public/img/ten-book/Vector-4.png'
import VectorSix from '/public/img/ten-book/Vector-5.png'
import VectorSeven from '/public/img/ten-book/Vector-6.png'
import VectorEight from '/public/img/ten-book/Vector-7.png'
import VectorNine from '/public/img/ten-book/Vector.png'
import VectorTen from '/public/img/ten-book/Vector-8.png'
import Image from 'next/image'

export default function TenBooked() {
  return (
    <div>
        <h1 className='font-bold text-4xl mt-5 text-center mb-5'>Top 10 Most Booked Service</h1>
        <div className="grid lg:grid-cols-3 gap-4 text-center mx-auto w-full">
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorOne} alt='' />
            <h1 className="mt-2">1. Specialty Catering</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorTwo} alt='' />
            <h1 className="mt-2">2. Food Trucks</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorThree} alt='' />
            <h1 className="mt-2">3. Wedding Supplies</h1>
        </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-4 text-center mx-auto w-full my-5">
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorFour} alt='' />
            <h1 className="mt-2">4. Wedding Staff</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorFive} alt='' />
            <h1 className="mt-2">5. Solo Musicians</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorSix} alt='' />
            <h1 className="mt-2">6. Variety Acts</h1>
        </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-4 text-center mx-auto w-full my-5">
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorSeven} alt='' />
            <h1 className="mt-2">7. Photography</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorEight} alt='' />
            <h1 className="mt-2">8. Party Favors</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorNine} alt='' />
            <h1 className="mt-2">9. Event Coordinators</h1>
        </div>
    </div>
    <div className="grid text-center mx-auto w-full my-5">
        <div className="flex flex-col justify-center items-center">
            <Image className='w-20 h-20' src={VectorTen} alt='' />
            <h1 className="mt-2">10. Event Speakers</h1>
        </div>
    </div>
    </div>
  )
}
