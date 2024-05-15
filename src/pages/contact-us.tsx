import Navbar from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import HeaderImage from '/public/img/contact-us/header.png'
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Footer from '@/components/layout/footer'


export default function ContactUs() {
  return (
    <div>
        <Navbar />
        <div className='w-full h-[30rem] relative block items-center justify-center'>
        <Image src={HeaderImage} alt="" className='w-full h-[30rem] object-cover filter brightness-50' />
        <div className="absolute top-1/3 left-0 right-0 text-center text-white">
        <h1 className='text-5xl font-bold'>Contact Us</h1>
    </div>
        </div>

        <div className="text-center mt-10 mb-20">
            <h1 className='font-bold text-3xl my-2'>TALK WITH US</h1>
            <h3 className='font-bold'>Let us know how we can help you.</h3>
            <p>For the fastest assistance, you can browse our FAQs page and check if you can find answers regarding <br /> your questions. We{`'`}re here for you Monday through Friday, <br /> (9:30am to 5:30pm EST) but sadly not during weekends and Federal Holidays.</p>

            <div className="grid lg:grid-cols-2 mx-20 mt-10 gap-5">
                <Input placeholder='First Name.....' />
                <Input placeholder='Last Name.....' />
            </div>
            <div className="grid lg:grid-cols-2 mx-20 mt-3 gap-5">
                <Input placeholder='Email Address.....' />

                <RadioGroup defaultValue="option-one" className='lg:flex grid items-center'>
                    <h1 className='flex justify-start'>I am a</h1>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Vendor</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Event Planner</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Affiliate</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Freelancer</Label>
                </div>
                </RadioGroup>
            </div>
            <div className="grid lg:grid-cols-2 mx-20 mt-3 gap-5">
                <Select>
                    <SelectTrigger >
                        <SelectValue placeholder="What do you want to talk about" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1. General question">1. General question </SelectItem>
                        <SelectItem value="2. Delete my personal information">2. Delete my personal information</SelectItem>
                        <SelectItem value="3. Delete my account">3. Delete my account</SelectItem>
                        <SelectItem value="4. How to unsubscribe from your email">4. How to unsubscribe from your email</SelectItem>
                        <SelectItem value="5. Need help finding more projects">5. Need help finding more projects</SelectItem>
                        <SelectItem value="6. Need help finding more vendors near me">6. Need help finding more vendors near me</SelectItem>
                        <SelectItem value="7. Change my membership package">7. Change my membership package</SelectItem>
                        <SelectItem value="8. Membership questions">8. Membership questions</SelectItem>
                        <SelectItem value="9. Change name of business in my profile">9. Change name of business in my profile</SelectItem>
                        <SelectItem value="10.Change or reschedule event">10.Change or reschedule event</SelectItem>
                        <SelectItem value="11. Report a problem with an event ">11. Report a problem with an event </SelectItem>
                        <SelectItem value="12.Request a refund ">12.Request a refund </SelectItem>
                        <SelectItem value="13.Send a dispute ">13.Send a dispute </SelectItem>
                    </SelectContent>
                </Select>
               
                <Input type='file' />
            </div>

            <Button className="bg-[#FDA50F] text-white mt-8">Submit</Button>
        </div>

        <Footer />
    </div>
  )
}
