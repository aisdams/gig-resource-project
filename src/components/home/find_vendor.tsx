import React from 'react'
import ImageFOne from '/public/img/find_vendor/find_category.jpg'
import ImageFTwo from '/public/img/find_vendor/event_management.jpg'
import ImageFThree from '/public/img/find_vendor/event_space.jpg'
import ImageFFour from '/public/img/find_vendor/audio_visual_services.jpg'
import ImageFFive from '/public/img/find_vendor/beauty_wellness.jpg'
import ImageFSix from '/public/img/find_vendor/entertaiment_service.jpg'
import ImageFSeven from '/public/img/find_vendor/food-beverage.jpg'
import ImageFEight from '/public/img/find_vendor/wedding_service.jpg'
import ImageFNine from '/public/img/find_vendor/even-supplier.jpg'
import ImageFTen from '/public/img/find_vendor/musical_arts.jpg'
import ImageFElevent from '/public/img/find_vendor/rentals.jpg'
import ImageF12 from '/public/img/find_vendor/logistik.jpg'
import Image from 'next/image'

export default function FindVendor() {
  return (
    <div className='mx-20'>
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-3">
        <div className="relative flex justify-center items-center h-72">
        <Image src={ImageFOne} alt="" className='h-full object-cover object-right filter brightness-50' />
        <div className="absolute top-1/2 text-white text-center">
            <h1 className='text-3xl font-bold'>FIND VENDORS BY CATEGORY</h1>
            <p>Are you a vendor?</p>
        </div>
    </div>
    <div className="relative flex justify-center items-center h-72">
        <Image src={ImageFTwo} alt="" className='h-full object-cover object-right filter brightness-50' />
        <div className="absolute top-1/2 text-white text-center">
            <h1 className='text-3xl font-bold'>Event Management</h1>
        </div>
    </div>
    <div className="relative flex justify-center items-center h-72">
        <Image src={ImageFThree} alt="" className='h-full object-cover object-right filter brightness-50' />
        <div className="absolute top-1/2 text-white text-center">
            <h1 className='text-3xl font-bold'>Event Spaces</h1>
        </div>
    </div>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] mt-3 gap-3">
            <div className="lg:flex grid gap-5">
                <div className="relative">
                <Image src={ImageFFour} alt="" className='h-full object-cover object-right filter brightness-50' />
                <div className="absolute top-1/2 text-white text-center">
                    <h1 className='text-3xl font-bold'>Audio & Visual Services</h1>
                </div>
                </div>
                <div className="grid gap-0 w-full">
                    <div className="relative flex justify-center items-center h-44">
                    <Image src={ImageFFive} alt="" className='h-full object-cover object-right filter brightness-50' />
                    <div className="absolute top-1/2 text-white text-center">
                        <h1 className='text-3xl font-bold'>Beauty & Wellness</h1>
                    </div>
                    </div>
                    <div className="relative flex justify-center items-center h-44 w-full">
                    <Image src={ImageFSeven} alt="" className='h-full object-cover object-right filter brightness-50' />
                    <div className="absolute top-1/2 text-white text-center">
                        <h1 className='text-3xl font-bold'>Food & Beverage</h1>
                    </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                    <div className="relative">
                        <Image src={ImageFSix} alt="" className='h-44 object-cover object-right filter brightness-50' />
                        <div className="absolute top-1/2 text-white text-center">
                            <h1 className='text-3xl font-bold'>Entertainment Services</h1>
                        </div>
                    </div>
                <div className="grid lg:grid-cols-2 gap-3 mt-3">
                <div className="relative flex justify-center items-center h-44">
                    <Image src={ImageFEight} alt="" className='h-full object-cover object-right filter brightness-50' />
                    <div className="absolute top-1/2 text-white text-center">
                        <h1 className='text-3xl font-bold'>Wedding Services</h1>
                    </div>
                </div>
                <div className="relative flex justify-center items-center h-44">
                    <Image src={ImageFNine} alt="" className='h-full object-cover object-right filter brightness-50' />
                    <div className="absolute top-1/2 text-white text-center">
                        <h1 className='text-3xl font-bold'>Event Needs Suppliers</h1>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
