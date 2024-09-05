import React, { useEffect } from "react";
import Avatar from "../images/Avatar.png";
import frame from "../images/Frame.png";
import ai from '../images/Ai.png'
import review from '../images/Reviews.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const UnitingPage = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="container md:flex mx-auto md:my-24 mt-5 justify-between">
      <div className="px-7">
        <h6 className="font-medium md:text-6xl text-4xl py-3" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">Uniting the world, <br />one video call a time</h6>
        <p className="py-2 text-gray-500 md:w-4/6">
          Experience the future of communication with ClearLink- where
          crystal-clear vidoe conferencing meets <br /> unparralled simplicity.
        </p>
        <div className="flex gap-3 py-8 text-xs">
          <button className="bg-[#175CD3] px-5 rounded-full text-white py-2">
            Start your free trial
          </button>
          <button className="text-[#175CD3] font-medium flex items-center gap-1"> <img src={ai} className="h-3" alt="" /> Discover Ai assistant</button>
        </div>
        <div className="flex gap-3 mb-5">
          <img src={Avatar} className="h-6" alt="" />
          <img src={review} alt="" className="h-7" />
        </div>
      </div>
      <div className="">
        <img src={frame} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="h-96" alt="" />
      </div>
    </div>
  );
};

export default UnitingPage;
