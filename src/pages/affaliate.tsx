import Navbar from '@/components/layout/Navbar'
import Image from 'next/image'
import React from 'react'
import HeaderImage from '/public/img/affiliate_header.png';
import { Button } from '@/components/ui/button';
import VectorOne from '/public/img/icon_affiliate/icon1.png'
import VectorTwo from '/public/img/icon_affiliate/icon2.png'
import VectorThree from '/public/img/icon_affiliate/icon3.png'
import VectorFour from '/public/img/icon_affiliate/icon4.png'
import VectorFive from '/public/img/icon_affiliate/icon5.png'
import VectorSix from '/public/img/icon_affiliate/icon6.png'
import ImageAffiliate from '/public/img/icon_affiliate/affiliate.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Footer from '@/components/layout/footer';

export default function Affaliate() {
  return (
    <div>
         <Navbar />
        <div className='w-full h-[30rem] relative block items-center justify-center'>
        <Image src={HeaderImage} alt="" className='w-full h-[30rem] object-cover filter brightness-50' />
        <div className="absolute lg:top-1/4 top-10 lg:left-10 lg:px-0 px-5 text-white">
        <h1 className='lg:text-4xl text-2xl font-bold'>EARN MORE AND BE MORE WITH <br /> GIGRESOURCE AFFILIATE PROGRAM </h1>
        <h1 className='font-bold my-3'>Refer a vendor and earn together. Become a Gigresource Affiliate today.</h1>
        <p>
        1. affiliates earn 10% commission for every vendor that signs up for premium plans (3 months / Annual) 
        </p>
        <p>2. commission is only valid if vendor gets charged after free trial </p>
        <p>3. commission is void if vendor cancels subscription during free trial period </p>
        <p>
        4. commission payout is only available when commission fee reaches a minimum of $150</p>
        <Button className="bg-[#FDA50F] text-white mt-3">Sign Up</Button>
        </div>
        </div>

        <div className="text-center mt-8">
            <h1 className='font-bold text-4xl'>BECOME OUR AFFILIATE</h1>
            <h1 className='font-bold text-2xl'>Unlock earning opportunities with our Affiliate Program!</h1>
        </div>
        <div className="mt-8 lg:mx-28 mx-5 text-justify">
                <div className="lg:flex grid items-center gap-5">
                    <Image src={VectorOne} alt='' className='w-14 lg:mx-0 mx-auto' />
                    <h1>Earn at Home Receive commissions for every successful vendor signup referred through your affiliate link. With a minimum payout of $150, you can turn this hobby into passive income without leaving the comforts of your home.</h1>
                </div>
                <div className="lg:flex grid items-center gap-5 mt-5">
                    <Image src={VectorTwo} alt='' className='w-14 lg:mx-0 mx-auto' />
                    <h1>Join Communities Be part of a goal-driven community of affiliates. Share insights, tips, and success stories. Gain access to our exclusive resources that help you with successful promotions. Collaborate and grow together with us!</h1>
                </div>
                <div className="lg:flex grid items-center gap-5 mt-5">
                    <Image src={VectorThree} alt='' className='w-14 lg:mx-0 mx-auto' />
                    <h1>Align Passion with Profit Transform your love for events into an earning opportunity. Promote services and help event planners make their celebrations the next big thing!</h1>
                </div>
        </div>

        <div className='bg-[#FDA50F] text-white py-20 mt-20 px-28'>
        <h1 className='tracking-wide text-4xl font-bold py-5 text-center'>How It Works</h1>
        <div className="lg:flex grid items-center gap-5">
            <Image src={VectorFour} alt='' className='w-14 lg:mx-0 mx-auto' />
                    <h1>1. Sign up - Sign up for free using your email address and fill out the registration sheet. Receive your login details via email, together with your personal affiliate link. </h1>
        </div>
        <div className="lg:flex grid items-center gap-5 mt-5">
            <Image src={VectorFive} alt='' className='w-14 lg:mx-0 mx-auto' />
            <h1>2. Refer vendors - Using your personal affiliate link, promote Gigresource to your trusted vendors for different events. Use any means of online platforms; just make sure they go through your link!</h1>
            </div>
        <div className="lg:flex grid items-center gap-5 mt-5">
            <Image src={VectorSix} alt='' className='w-14 lg:mx-0 mx-auto' />
            <h1>3. Get paid - You get a 10% commission fee for every successful referral once they sign up for the Premium and Elite membership plans. Maximize your earnings by reaching out to more vendors!</h1>
        </div>
        </div>

        <div className="grid lg:grid-cols-2 items-center">
        <div className="lg:ml-20 mx-10">
          <h1 className="text-4xl font-bold mb-3 lg:mt-0 mt-5">Are You Qualified To Join The Affiliate Program?</h1>
          <h3 className="">Check to see if you are exactly who we’re looking for!</h3>
          <h1>Do you have a computer, laptop, or any mobile device with internet?</h1>
          <h1>Do you have an email address, any social media account, or any platform that you can use for promotion?</h1>
          <h1>Do you want to create a new source of passive revenue? </h1>
          <h1>Do you love parties as much as we do?</h1>
          <Button className="px-9 bg-[#FDA50F] textw-white mt-5">SignUp For Free</Button>
        </div>
        <Image src={ImageAffiliate} alt="" className=" object-cover object-top lg:mt-0 mt-5"/>
        </div>

        <div className="bg-[#FDA50F] text-white pb-20">
            <h1 className='text-center font-bold text-4xl mt-10 pt-10'>FAQ</h1>
        <Accordion type="single" collapsible className='mx-20'>
        <AccordionItem value="item-1">
            <AccordionTrigger>What is the Gigresource Affiliate Program?</AccordionTrigger>
            <AccordionContent>
            The Gigresource Affiliate Program is a way for you to earn money by introducing and referring new vendors to our platform. You receive commissions as our reward for bringing traffic to our site. All you need to do is promote Gigresource and make vendors sign up to our paid membership plans.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>How much can I earn? </AccordionTrigger>
            <AccordionContent>
            We don't put a limit to how much you can earn! For every successful vendor referral, you get a 10% commission fee. You can monitor your revenue in your personal affiliate dashboard and keep track of your performance. 
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>What do I need to sign up?</AccordionTrigger>
            <AccordionContent>
            You need to have an active email address. To become a Gigresource affiliate, all you need is a device with internet access, then you're good to go!
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger>What happens after I sign up? </AccordionTrigger>
            <AccordionContent>
            After signing up, you will receive a unique affiliate link, which you can use anywhere to promote Gigresource. 
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
            <AccordionTrigger>What is an affiliate link?  </AccordionTrigger>
            <AccordionContent>
            An affiliate link is a unique code that will help us determine that it was you who referred the new vendor signup. If a vendor that you referred did not click your affiliate link, we cannot credit you the referral. So make sure you get them to go through your affiliate link!
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
            <AccordionTrigger>How do I promote Gigresource? </AccordionTrigger>
            <AccordionContent>
            Be loud. Make a lot of noise! You can send emails, newsletters, or even just the current social media accounts you have. Post your affiliate link on your platform. Once you sign up, you will also gain access to our exclusive Affiliates Resources, where you can learn various ways to make more money out of the affiliate marketing program.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
            <AccordionTrigger>Can anyone join your affiliate program?  </AccordionTrigger>
            <AccordionContent>
            Yes! Whether you are a pro working a full-time job or a stay-at-home who wants to earn extra revenue, you can sign up and be one of our Gigresource affiliates
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </div>
        <Footer />
    </div>
  )
}
