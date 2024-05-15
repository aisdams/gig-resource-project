import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SignUpImage from '/public/img/signup-header.jpg'

export default function SignUp() {
  return (
    <div>
        <div className="grid lg:grid-cols-2">
            <div className="">
                <Image src={SignUpImage} alt="" className='w-full h-screen object-cover' />
            </div>
            <div className="mx-20 mt-10">
                <h1 className='text-center font-bold text-3xl'>CREATE YOUR ACCOUNT</h1>
                <p className='text-center mb-8'>Planning an event? Join Gigresource now!</p>

                <Input placeholder='First Name.......' className='mb-3' />
                <Input placeholder='Last Name.......' className='mb-3' />
                <Input placeholder='Email.......' className='mb-3' />
                <Input placeholder='Password.......' className='mb-3' />
                <Input placeholder='Phone Number.......' className='mb-3' />
                <div className="mb-3">
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">United States</SelectItem>
                    <SelectItem value="united kingdom">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Your Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">Band</SelectItem>
                    <SelectItem value="united kingdom">DJ</SelectItem>
                    <SelectItem value="australia">Verity</SelectItem>
                </SelectContent>
                </Select>
                <Button className="bg-[#FDA50F] text-white w-full my-3">Sign Up</Button>
                <h1 className='text-center'>Already have an account? <Link href="/" className='text-blue-600'>LOG IN</Link></h1>
            </div>
        </div>
    </div>
  )
}
