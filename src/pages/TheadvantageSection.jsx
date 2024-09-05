import React, { useEffect } from "react";
import handArrow from "../images/arrow.png";
import rectangle from "../images/Rectangle.png";
import {
  CalendarDateRangeIcon,
  ShieldCheckIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
} from "@heroicons/react/16/solid";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TheadvantageSection = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="container mb-14 relative mx-auto px-9">
      <span className="text-blue-600 font-medium">The ClearLink Advantage</span>
      <h5 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="font-bold text-2xl py-5 text-black">
        Why choose Clearlink?
      </h5>
      <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text-gray-500">
        In a world where connection is everything, ClearLink takes the lead. Our
        cutting-edge video conferencing app offers:
      </p>
      <img src={handArrow} className="absolute md:flex hidden md:top-9 md:right-48 md:h-40 " alt="" />

      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="md:flex mt-16 md:justify-between">
        <div className="md:w-2/4 flex-row flex-wrap md:flex">
          <div className="md:w-2/4 w-full h-2/4">
            <div className="rounded-full p-3 my-4 border bg-[#F9FAFB] w-10">
              <VideoCameraIcon className="h-4 text-blue-800" />
            </div>
            <h3 className="font-medium text-black">Crystal-clear HD video</h3>
            <p className="md:text-sm text-gray-500">
              No more pixelation or blurriness – just <br /> stunning, lifelike
              clarity that brings your <br /> team closer in meetings.
            </p>
          </div>
          <div className="md:w-2/4 h-2/4">
            <div className="rounded-full p-3 my-4 border bg-[#F9FAFB] w-10">
              <SpeakerWaveIcon className="h-4 text-blue-600" />
            </div>
            <h3 className="font-medium text-black">Noise-canceling audio</h3>
            <p className="md:text-sm text-gray-500">
              Say goodbye to distractions with our <br /> advanced audio tech
              for crisp, <br /> interruption-free conversations.
            </p>
          </div>
          <div className="md:w-2/4 h-2/4">
            <div className="rounded-full p-3 my-4 border bg-[#F9FAFB] w-10">
              <CalendarDateRangeIcon className="h-4 text-blue-700" />
            </div>
            <h3 className="font-medium text-black">Scheduling made easy</h3>
            <p className="md:text-sm text-gray-500">
              Streamline your agenda with ClearLink's <br /> intuitive
              scheduling. Set up meetings, <br /> send invitations, and receive
              reminders in <br /> one place.
            </p>
          </div>
          <div className="md:w-2/4 h-2/4 mb-6">
            <div className="rounded-full p-3 my-4 border bg-[#F9FAFB] w-10">
              <ShieldCheckIcon className="h-4 text-blue-600" />
            </div>
            <h3 className="font-medium text-black">Bank-grade security</h3>
            <p className="md:text-sm text-gray-500">
              Your privacy is our priority with bank- <br />
              grade security protocols safeguarding <br /> your meetings and
              data from unwanted intruders.
            </p>
          </div>
        </div>
        <div className="2/5">
          <img src={rectangle} className="h-96" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TheadvantageSection;
