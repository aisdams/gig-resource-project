import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import ImageLogo from '/public/img/logo_GIG.png';
import { Button } from '../ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 890);
    }

    handleResize(); // set initial width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowLoginModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='flex justify-between py-3 mx-20'>

      {isMobile ? (
        <div className="w-full grid grid-cols-2 justify-between">
          <Image src={ImageLogo} alt='' className='w-16 h-10' />
          <Sheet>
            <SheetTrigger className='flex justify-end items-center'><FiMenu/></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className='grid gap-5'>
                <Link href='/'>Home</Link>
                <div className="relative z-20" onClick={toggleDropdown}>
                  <DropdownMenu>
                  <DropdownMenuTrigger>Service</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Affiliate</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Contact Us</DropdownMenuItem>
                    <DropdownMenuItem>Growing Community</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Link href='/sign-up'>Sign Up</Link>
                <a href='#login' onClick={toggleLoginModal}>Log In</a>

                <Button className='flex border border-black gap-2 bg-transparent text-black mx-auto'>
                  <span>
                    <CiSearch />
                  </span>
                  Search in Here
                </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <div className='flex justify-between py-3 w-full'>
      <Image src={ImageLogo} alt='' className='w-16 h-10' />

      <div className='flex uppercase gap-3 items-center'>
        <Link href='/'>Home</Link>
        <div className="relative z-20" onClick={toggleDropdown}>
          <span className="cursor-pointer">Service</span>
          {showDropdown && (
            <ul className="absolute top-full -left-1/2 w-56 bg-[#1338BD] text-white border border-gray-300 rounded-md py-2 px-5">
              <li className="hover:bg-gray-100 hover:text-black">
                <Link href="/affaliate">Affiliate</Link>
              </li>
              <li className="hover:bg-gray-100 hover:text-black">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="hover:bg-gray-100 hover:text-black">
                <Link href="/growing-comunity">Growing Community</Link>
              </li>
            </ul>
          )}
        </div>
        <Link href='/sign-up'>Sign Up</Link>
        <a href='#login' onClick={toggleLoginModal}>Log In</a>

        <Button className='flex border border-black gap-2 bg-transparent text-black'>
          <span>
            <CiSearch />
          </span>
          Search in Here
        </Button>
      </div>

    </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800/60 bg-opacity-75 z-[99]'>
          <div className='bg-white p-8 rounded-md' ref={modalRef}>
            <h2 className='text-2xl mb-4'>Login To Gigresource</h2>
            <form>
              <div className='mb-4'>
                <label htmlFor='email' className='block mb-1'>
                  Email:
                </label>
                <input type='text' id='email' name='email' className='border px-2 py-1 w-full' />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block mb-1'>
                  Password:
                </label>
                <input type='password' id='password' name='password' className='border px-2 py-1 w-full' />
              </div>
              <div className="flex justify-between gap-5 items-center">
                <p className='font-light'>Forget your Password?</p>
                <p className='font-light'><Checkbox /> Keep Me Logged in</p>
              </div>
              <div className='mt-3'>
                <Button type='submit' className='w-full bg-[#FDA50F]'>Log In</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}