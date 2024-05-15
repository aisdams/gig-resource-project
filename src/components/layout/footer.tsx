import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Facebook from '/public/img/footer_icon/instagram.png'
import Instagram from '/public/img/footer_icon/facebook.png'
import ImageLogo from '/public/img/logo_GIG.png'

export default function Footer() {
  return (
    <div className='w-full'>
       <div className="lg:flex grid gap-20 items-center bg-[#1338BD] text-white lg:mx-auto w-full py-20 justify-center">
        <Image src={ImageLogo} alt='' className='w-24 h-16' />

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
        <div className="grid">
            <h1 className='font-bold'>Information</h1>
            <ul>
                <li>About Us</li>
                <li><Link href="contact-us">Contact Us</Link></li>
                <li>Help Center</li>
            </ul>
        </div>
        <div className="grid">
            <h1 className='font-bold'>Legal and Policies</h1>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>FAQs </li>
            </ul>
        </div>
        <div className="grid">
            <h1 className='font-bold'>Sign Up to Get Started</h1>
            <ul>
                <li>Looking for Vendors</li>
                <li>Become a Vendor</li>
                <li>Affiliate Program </li>
            </ul>
        </div>
        <div className="grid">
            <h1 className='font-bold'>Connect with Us</h1>
            <div className="flex mx-auto gap-3 justify-center">
                <Image src={Facebook} alt='' className='w-10 h-10' />
                <Image src={Instagram} alt='' className='w-10 h-10' />
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
