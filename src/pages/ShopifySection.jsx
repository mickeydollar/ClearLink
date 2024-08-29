import React from 'react'
import shopify from '../images/Shopify.png'
import content from '../images/Contents.png'
import { StarIcon } from '@heroicons/react/16/solid'
import avatar1 from '../images/Avatar1.png'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const ShopifySection = () => {
  return (
    <div className='md:flex bg-[#F9FAFB] justify-between py-20 mb-10'>
        <div className='md:w-1/2  md:mx-20 mx-6'>
            <img src={shopify} className='h-6' alt="" />
            <div className="flex text-yellow-400 gap-1 py-6">
                <StarIcon className='h-3'/>
                <StarIcon className='h-3'/>
                <StarIcon className='h-3'/>
                <StarIcon className='h-3'/>
                <StarIcon className='h-3'/>           
            </div>
            <p className='font-medium text-black text-3xl md:w-96'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>
            <div className='flex py-6 justify-between md:w-96 mb-5'>
            <div className='gap-3 flex'>
            <img src={avatar1} className='h-10' alt="" />
            <div className='flex flex-col'>
                    <h1 className='font-bold text-sm'>Sarah Thompson</h1>
                    <p className='text-xs text-gray-600'>Projext Manager, Shopify</p>
               </div>
            </div>
            <div className='flex gap-4'>
                <button className='rounded-full p-3 border border-blue-100 bg-white'> <ArrowLeftIcon className='h-4 text-blue-700'/></button>
                <button className='rounded-full p-3 border border-blue-100 bg-white'> <ArrowRightIcon className='h-4 text-blue-700'/></button>
            </div>
               
            </div>
        </div>
        <div className='md:w-1/2 md:flex justify-center'>
            <img src={content} className='h-96' alt="" />
        </div>

    </div>
  )
}

export default ShopifySection