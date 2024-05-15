import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSlider1 from '/public/img/vendor_comunity/slide1.png'
import ImageSlider2 from '/public/img/vendor_comunity/slide2.png'
import ImageSlider3 from '/public/img/vendor_comunity/slide3.jpg'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { Autoplay, EffectFade } from 'swiper/modules';
import ImageOne from '/public/img/vendor_comunity/dj.jpg'
import ImageTwo from '/public/img/vendor_comunity/bussiness_event.jpg'
import ImageThree from '/public/img/vendor_comunity/ballon_bussiness.jpg'
import ImageFour from '/public/img/vendor_comunity/photograph.jpg'
import ImageFive from '/public/img/vendor_comunity/visibility.jpg'

import "swiper/css";
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import GrowingImage from '/public/img/vendor_comunity/growing.png';
import BecomeImage from '/public/img/vendor_comunity/become.png';
import Footer from '@/components/layout/footer';

export default function GrowingComunity() {
  return (
    <div>
      <Navbar />
        <Swiper 
        className="mySwiper" 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
      }}
      
      modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide className='relative'>
            <Image src={ImageSlider1} alt="" className='w-full h-[35rem] lg:h-[30rem] object-cover filter brightness-50' />
            <div className="absolute lg:flex grid gap-3 lg:gap-10 justify-between top-10 lg:top-[15%] items-center mx-20">
                <div className="text-white">
                    <h1 className='font-bold lg:text-4xl text-2xl'>JOIN OUR GROWING COMUNITY OF VENDORS</h1>
                    <p>Be our partner and secure bookings for events now</p>
                </div>
                <div className="grid gap-3  bg-[#1338BD] p-5 rounded-xl">
               <div className="grid grid-cols-2 gap-3">
                    <Input placeholder='First Name' className='rounded-full'/>
                    <Input placeholder='Last Name'  className='rounded-full'/>
               </div>
               <div className="grid grid-cols-2 gap-3">
                    <Input placeholder='Email Address' className='rounded-full'/>
                    <Input placeholder='Phone Number' className='rounded-full'/>
               </div>
               <div className="">
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Bussiness Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">United States</SelectItem>
                    <SelectItem value="united kingdom">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <div className="">
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="City/State" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">United States</SelectItem>
                    <SelectItem value="united kingdom">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <h1 className=' text-white text-center'>Already Have account? Login</h1>
                <Button className="bg-[#FDA50F] text-white w-full my-3">Join Us</Button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <Image src={ImageSlider2} alt="" className='w-full h-[35rem] lg:h-[30rem] object-cover filter brightness-50' />
            <div className="absolute lg:flex grid gap-3 lg:gap-10 justify-between top-10 lg:top-[15%] items-center mx-20">
                <div className="text-white">
                    <h1 className='font-bold lg:text-4xl text-2xl'>JOIN OUR GROWING COMUNITY OF VENDORS</h1>
                    <p>Be our partner and secure bookings for events now</p>
                </div>
                <div className="grid gap-3  bg-[#1338BD] p-5 rounded-xl">
               <div className="grid grid-cols-2 gap-3">
                    <Input placeholder='First Name' className='rounded-full'/>
                    <Input placeholder='Last Name'  className='rounded-full'/>
               </div>
               <div className="grid grid-cols-2 gap-3">
                    <Input placeholder='Email Address' className='rounded-full'/>
                    <Input placeholder='Phone Number' className='rounded-full'/>
               </div>
               <div className="">
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Bussiness Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">United States</SelectItem>
                    <SelectItem value="united kingdom">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <div className="">
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="City/State" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">United States</SelectItem>
                    <SelectItem value="united kingdom">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <h1 className=' text-white text-center'>Already Have account? Login</h1>
                <Button className="bg-[#FDA50F] text-white w-full my-3">Join Us</Button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <Image src={ImageSlider3} alt="" className='w-full h-[35rem] lg:h-[30rem] object-cover filter brightness-50' />
            <div className="absolute lg:flex grid gap-3 lg:gap-10 justify-between top-10 lg:top-[15%] items-center mx-20">
                <div className="text-white">
                    <h1 className='font-bold lg:text-4xl text-2xl'>JOIN OUR GROWING COMUNITY OF VENDORS</h1>
                    <p>Be our partner and secure bookings for events now</p>
                </div>
                <div className="grid gap-3  bg-[#1338BD] p-5 rounded-xl">
               <div className="grid grid-cols-2 gap-3">
                    <Input placeholder='First Name' className='rounded-full'/>
                    <Input placeholder='Last Name'  className='rounded-full'/>
               </div>
               <div className="grid grid-cols-2 gap-3">
                    <Input placeholder='Email Address' className='rounded-full'/>
                    <Input placeholder='Phone Number' className='rounded-full'/>
               </div>
               <div className="">
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Bussiness Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">United States</SelectItem>
                    <SelectItem value="united kingdom">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <div className="">
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="City/State" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="united states">United States</SelectItem>
                    <SelectItem value="united kingdom">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
                </Select>
                </div>
                <h1 className=' text-white text-center'>Already Have account? Login</h1>
                <Button className="bg-[#FDA50F] text-white w-full my-3">Join Us</Button>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>

        <div className="grid lg:grid-cols-2 items-center ">
        <Image src={GrowingImage} alt="" className="h-[80vh] object-cover object-top"/>
        <div className="lg:pl-20 bg-[#1338BD] text-white lg:h-[80vh] h-max lg:py-20 py-10 px-10 lg:px-0">
          <h1 className="text-4xl font-bold mb-3">BECOME A VENDOR TODAY</h1>
          <h3 className="mb-3">Unlock opportunities. Boost visibility. Increase sales</h3>
          <p className='mb-3'>1. CREATE PROFILE Build a standout profile that shows off your services. Don’t forget to hype it up by adding photos, videos, and your cool exclusive offers. </p>
          <p className='mb-3'>2. SELECT MEMBERSHIP Whether you’re after top-notch leads or more premium visibility, choose the best membership type that suits your goals! </p>
          <p className='mb-3'>3. ADVERTISE Reach more clients with the right membership plan and well-curated profile!  </p>
          <p className='mb-3'>4. GET EVENT LEADS Get notified with endless leads that match your services. You may also browse our list of projects and send your bids! Dive into event specifics, send quotes, and don’t forget to customize your response to leave a stellar impression. </p>
          <p className='mb-3'>5. SECURE BOOKINGS Secure bookings without the hassle and get paid seamlessly online! Clients can leave reviews on your profile; make sure to leave them satisfied</p>
        </div>
        </div>

        <div className="text-center my-20">
          <h1 className='font-bold text-4xl'>EXPLORE THE PERFECT PACKAGE</h1>
          <h3 className='font-bold mb-10'>Bring your business to new heights with the best membership package that aligns perfectly with your goals!</h3>

          <div className="grid lg:grid-cols-3 mx-20 gap-8">
            <div className="bg-[#1338BD] text-white rounded-2xl p-10">
              <h1 className='text-3xl mb-2'>BASIC VENDOR</h1>
              <h3>Start small, dream big. Essential features to kickstart your journey.</h3>
              <Button className="bg-[#FDA50F] text-white w-full my-3">Sign Up For Free</Button>
            </div>
            <div className="bg-[#1338BD] text-white rounded-2xl p-10">
              <h1 className='text-3xl mb-2'>PREMIUM VENDOR</h1>
              <h3>Elevate your business with powerful tools and access to paid advertisements.</h3>
              <Button className="bg-[#FDA50F] text-white w-full my-3">Learn More</Button>
            </div>
            <div className="bg-[#1338BD] text-white rounded-2xl p-10">
              <h1 className='text-3xl mb-2'>ELITE VENDOR</h1>
              <h3>Go big or go home! Unlock the ultimate VIP experience with top-tier benefits and enhanced visibility.</h3>
              <Button className="bg-[#FDA50F] text-white w-full my-3">Learn More</Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] items-center h-full">
        <div className="lg:pl-20 bg-[#1338BD] text-white h-full lg:py-20 py-10 px-10 lg:px-0">
          <h1 className="text-4xl font-bold mb-3">BECOME A VENDOR TODAY</h1>
          <h3 className="mb-3">Unlock opportunities. Boost visibility. Increase sales</h3>
          <div className="my-3">
            <h3 className='text-2xl'>Exposure to a Diverse Audience</h3>
            <p>Gain visibility among a diverse and extensive audience seeking varied entertainment and event services.</p>
          </div>
          <div className="my-3">
            <h3 className='text-2xl'>Customized Profile for the Target Market</h3>
            <p>Reach your target clients by showcasing your unique services and building a stellar profile to stand out in a crowded market</p>
          </div>
          <div className="my-3">
            <h3 className='text-2xl'>Real-Time Availability Management</h3>
            <p>Easily manage your availability in real-time, reducing scheduling conflicts and ensuring optimal utilization of your services</p>
          </div>
          <div className="my-3">
            <h3 className='text-2xl'>Enhanced Visibility through Featured Listings</h3>
            <p>Elevate your profile with featured listings, increasing your visibility and attracting clients seeking premium entertainment options.</p>
          </div>
          <div className="my-3">
            <h3 className='text-2xl'>Customer Review Showcase</h3>
            <p>Showcase positive client reviews and testimonials, building trust and boosting credibility among potential clients.</p>
          </div>
          <div className="my-3">
            <h3 className='text-2xl'>Flexible Pricing and Packages</h3>
            <p>Set and manage your pricing and packages flexibly, allowing you to cater to different client budgets and preferences.</p>
          </div>
        </div>
        <Image src={BecomeImage} alt="" className="h-full object-cover object-top"/>
        </div>

        <div className="my-20">
          <div className="text-center">
            <h1 className='text-4xl font-bold'>VENDORS ARE RAVIN’</h1>
            <h3 className='text-2xl mb-10'>(and we can’t blame ‘em!)</h3>
          </div>

          <div className="gap-5 lg:mx-32 mx-10 grid">
          <div className="lg:flex grid items-center gap-5">
            <Image src={ImageOne} alt='' className="rounded-full w-32 h-32 object-cover lg:mx-0 mx-auto" />
            <h3>As a DJ in Los Angeles, GigResource has been a game-changer for my business. The platform is user-friendly, and the service is top-notch. It{`'`}s made connecting with clients and booking gigs a breeze. Highly recommend it! - DJ Jamz, Professional Disc Jockey</h3>
          </div>
          <div className="lg:flex grid items-center gap-5">
            <Image src={ImageTwo} alt='' className="rounded-full w-32 h-32 object-cover lg:mx-0 mx-auto" />
            <h3>Truly magical moments with GigResource! I{`'`}m a magician based in New York City, and Gigresource has truly elevated my business. The platform is fantastic, and the support is unmatched. It has opened doors to incredible events, and I couldn{`'`}t be happier with the results. - Mystique, Illusionist</h3>
          </div>
          <div className="lg:flex grid items-center gap-5">
            <Image src={ImageThree} alt='' className="rounded-full w-32 h-32 object-cover lg:mx-0 mx-auto" />
            <h3>Thanks to GigResource! It has transformed my balloon art business. The platform{`'`}s simplicity is a game-changer, and the service is outstanding. It{`'`}s been instrumental in expanding my client base and growing my business. - CJ Balloons and Decors, Balloon Artist & Party Needs Supplier</h3>
          </div>
          <div className="lg:flex grid items-center gap-5">
            <Image src={ImageFour} alt='' className="rounded-full w-32 h-32 object-cover lg:mx-0 mx-auto" />
            <h3>GigResource has been a fantastic partner in making my photo business more known to a wider audience. Easy to navigate and the service is excellent. It has helped me secure more bookings and connect with clients looking for unique entertainment options. - Harold M., Photobooth Operator</h3>
          </div>
          <div className="lg:flex grid items-center gap-5">
            <Image src={ImageFive} alt='' className="rounded-full w-32 h-32 object-cover lg:mx-0 mx-auto" />
            <h3>As a caterer in Miami, FL, GigResource has been a lifesaver. The platform is simple, efficient, and the service is exceptional. Having the option to explore projects and send bids helped me find more events that fit my preferences. It has significantly increased my visibility and brought in more clients for various events. Highly satisfied with Gigresource! - Liz Y., Caterer</h3>
          </div>
          </div>
        </div>

        <div className="bg-[#FDA50F] text-white pb-20">
            <h1 className='text-center font-bold text-4xl mt-10 pt-10'>FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
        <Accordion type="single" collapsible className='mx-20'>
        <AccordionItem value="item-1">
            <AccordionTrigger>Wh1. What is GigResource? </AccordionTrigger>
            <AccordionContent>
            Gigresource is an innovative event booking platform that connects vendors and entertainers with individuals looking to organize memorable events. Whether you{`'`}re a caterer, DJ, magician, or any other event professional, Gigresource provides a centralized platform to showcase your services and reach a wider audience.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>2. How can I sign up as a vendor? </AccordionTrigger>
            <AccordionContent>
            Signing up as a vendor or entertainer on Gigresource is easy! Simply click on the “Join Us” button above. Fill out the registration form with your details, including the category of your offered services, and submit the necessary documentation. Once approved, you{`'`}ll gain access to your personalized vendor dashboard.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>3. What types of vendors are welcome on Gigresource? </AccordionTrigger>
            <AccordionContent>
            Gigresource welcomes a diverse range of vendors and entertainers suitable to different events and celebrations.If you provide services that contribute to creating unforgettable events, Gigresource is the platform for y
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger>4. Do I have to pay to sign up as a vendor?</AccordionTrigger>
            <AccordionContent>
            Don’t worry, we offer the Basic Vendor package for free!
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
            <AccordionTrigger>5. What can I gain as a vendor by signing up for the Premium and Elite membership? </AccordionTrigger>
            <AccordionContent>
            Our paid membership packages offer features that help you boost your business to reach more of your target market. Plus, you get to have the chance to run advertisements and be displayed as a Featured Vendor!
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
            <AccordionTrigger>6. How do I create a compelling and standout profile?</AccordionTrigger>
            <AccordionContent>
            Make your descriptions on-point and savvy! Showcase your best services by uploading your portfolio with your best photos and videos. Choosing the Elite Vendor Package gives you more options to customize your profile and stand out to our clients.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
            <AccordionTrigger>7. Can I manage my bookings and schedule through Gigresource? </AccordionTrigger>
            <AccordionContent>
            Absolutely! Gigresource provides a user-friendly dashboard where you can manage your bookings and update your availability. After securing your bookings, you have the freedom to communicate with the client through various platforms using the details they have provided.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
            <AccordionTrigger>8. How can I increase my visibility and attract more clients? </AccordionTrigger>
            <AccordionContent>
            To maximize your visibility, regularly update your profile with new content, respond promptly to inquiries, and encourage satisfied clients to leave reviews. Additionally, take advantage of our marketing tools and promotions to showcase your services to a broader audience. Get more leads and wider reach by availing the Elite Vendor Package.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
            <AccordionTrigger>9. How does Gigresource handle disputes between vendors and clients?</AccordionTrigger>
            <AccordionContent>
            In the rare event of a dispute, Gigresource has a dispute resolution process in place. Our support team will investigate the matter and work towards a fair and mutually beneficial resolution. We prioritize the satisfaction of both parties and aim to maintain a positive experience for everyone involved
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
            <AccordionTrigger>10. How are reviews and ratings handled on Gigresource? </AccordionTrigger>
            <AccordionContent>
            Clients have the opportunity to leave reviews and ratings based on their experience with your services. Positive reviews enhance your credibility and visibility on the platform. It{`'`}s essential to encourage satisfied clients to share their feedback and address any concerns promptly to maintain a positive reputation.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
            <AccordionTrigger>11. How can I stay updated on new features and changes to the terms and policies of Gigresource? </AccordionTrigger>
            <AccordionContent>
            Stay informed about the latest updates, features, and news by regularly checking our blog and announcements section. We also send out newsletters and notifications to keep you in the loop about any changes or opportunities on Gigresource.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </div>
        <Footer />
    </div>
  )
}
