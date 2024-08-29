import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import appstore from '../images/appstore.png'
import playstore from '../images/googleplay.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs'

const FooterSection = () => {
  return (
    <div className='w-full'>
        <div className='justify-between md:flex md:px-16 px-8'>
        <div className='md:w-1/4'>
            <img src={logo} className='h-5' alt="" />
            <p className='md:py-8 py-5 text-sm'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </div>
        <div className='mb-3'>
        <ul className='md:flex md:gap-20 flex justify-between mb-2 text-sm'>
            <Link to='./'> Product</Link>
            <Link to='./'> Company</Link>
            <Link to='./'> Resources</Link>
            <Link to='./'> Legal</Link>
        </ul>
        <ul className='md:flex md:gap-20 flex justify-between mb-2 text-sm'>
            <Link to='./'> Overview</Link>
            <Link to='./'> About Us</Link>
            <Link to='./'> Blog</Link>
            <Link to='./'> Terms</Link>
        </ul>
        <ul className='md:flex md:gap-20 flex justify-between mb-2 text-sm'>
            <Link to='./'> Features</Link>
            <Link to='./'> Careers</Link>
            <Link to='./'> Events</Link>
            <Link to='./'> Privacy</Link>
        </ul>
        <ul className='md:flex md:gap-20 flex justify-between mb-2 text-sm'>
            <Link to='./'> Solutions</Link>
            <Link to='./'> Press</Link>
            <Link to='./'> Help centre</Link>
            <Link to='./'> Cookies</Link>
        </ul>
        <ul className='md:flex md:gap-20 flex justify-between mb-2 text-sm'>
            <Link to='./'> Tutorials</Link>
            <Link to='./'> News</Link>
            <Link to='./'> Tutorials</Link>
            <Link to='./'> Licenses</Link>
        </ul>
        <ul className='md:flex md:gap-20 flex justify-between mb-2 text-sm'>
            <Link to='./'> Pricing</Link>
            <Link to='./'> Contact</Link>
            <Link to='./'> Support</Link>
            <Link to='./'> Contact</Link>
        </ul>
        </div>
        <div className='gap-3 md:flex flex-col'>
            <span className='text-blue-900 font-bold'>Get the app</span>
            <img src={appstore} className='h-6' alt="" />
            <img src={playstore} className='h-6' alt="" />
        </div>
        </div>
        <div className='bg-[#F9FAFB] py-7 md:flex justify-between md:px-16 items-center mt-4'>
            <h1 className='text-sm flex py-2 justify-center'>© 2023 ClearLink. All rights reserved.</h1>
            <div className='gap-4 flex justify-center'>
            <FaLinkedin /> 
           <CiTwitter/>
           <FaFacebook/>
           <BsInstagram/>
           <BsGithub/>
           <BsYoutube/>
            </div>
        </div>
    </div>
  )
}

export default FooterSection