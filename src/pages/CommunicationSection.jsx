import React from 'react'
import screen from '../images/screen.png'
import { CheckCircleIcon } from '@heroicons/react/24/outline'


const CommunicationSection = () => {
  return (
    <div className='md:flex w-full justify-between mb-16'>
        <div className='md:w-1/2 md:px-20 px-10 mb-10'>
            <h6 className='md:text-4xl text-2xl py-6 font-bold'>Ready to clear the path to perfect communication?</h6>
            <div className='flex px-3 items-center gap-2'>
                <CheckCircleIcon className='h-5 text-blue-900 ' />
                <h3>30 days free trial</h3>
            </div>
            <div className='flex px-3 items-center py-2 gap-2'>
                <CheckCircleIcon className='h-5 text-blue-900 ' />
                <h3>Cancel at any time</h3>
            </div>
            <div className='flex px-3 items-center gap-2'>
                <CheckCircleIcon className='h-5 text-blue-900 ' />
                <h3>Access to all features</h3>
            </div>
            <div className='flex px-3 items-center py-2 gap-2'>
                <CheckCircleIcon className='h-5 text-blue-900 ' />
                <h3>Peronalized onboarding</h3>
            </div>
            <div className='flex gap-2 my-3'>
                <button className='px-4 py-2 border rounded-full font-medium text-sm'>Talk to sales</button>
                <button className='px-4 py-2 border bg-blue-800 text-white rounded-full font-medium text-xs'> Start your free trial</button>
            </div>
        </div>
        <div className='md:w-1/2 '>
            <img src={screen} alt="" />
        </div>
    </div>
  )
}

export default CommunicationSection