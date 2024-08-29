import React from "react";
import Avatar from "../images/Avatar.png";
import frame from "../images/Frame.png";
import ai from '../images/Ai.png'

const UnitingPage = () => {
  return (
    <div className="container md:flex mx-auto md:my-24 justify-between">
      <div className="px-7">
        <h6 className="font-medium text-6xl py-3">Uniting the world, <br />one video call a time</h6>
        <p className="py-2 text-gray-500 w-4/6">
          Experience the future of communication with ClearLink- where
          crystal-clear vidoe conferencing meets <br /> unparralled simplicity.
        </p>
        <div className="flex gap-3 py-8 text-xs">
          <button className="bg-[#175CD3] px-5 rounded-full text-white py-2">
            Start your free trial
          </button>
          <button className="text-[#175CD3] font-medium flex items-center gap-1"> <img src={ai} className="h-3" alt="" /> Discover Ai assistant</button>
        </div>
        <div className="flex gap-3">
          <img src={Avatar} className="h-6" alt="" />
        </div>
      </div>
      <div className="">
        <img src={frame} className="h-96" alt="" />
      </div>
    </div>
  );
};

export default UnitingPage;
