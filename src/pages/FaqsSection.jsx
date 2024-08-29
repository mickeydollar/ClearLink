import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const FaqsSection = () => {
  return (
    <div className="md:flex container mx-auto md:px-10 px-6 justify-between md:mb-20 mb-5">
      <div className="md:w-96 ">
        <span className="text-blue-600 font-medium text-sm">support</span>
        <h4 className="font-bold text-3xl py-3">FAQs</h4>
        <p className="text-gray-500 mb-2">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please <span className="underline">chat to our friendly team.</span>
        </p>
      </div>
      <div className="md:w-2/4">
        <div className="bg-[#F9FAfB] rounded p-4 flex">
          <div className="">
            <span className="font-medium to-black">
              How many participants can join a ClearLink video conference?
            </span>
            <p className="text-sm py-2 text-gray-500">
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <div>
            {" "}
            <MinusCircleIcon className="h-4" />
          </div>
        </div>
        <div className="flex p-4 justify-between border-b-2">
          <h4 className="font-medium text-sm">
            Can I use ClearLink on multiple devices?
          </h4>
          <button>
            {" "}
            <PlusCircleIcon className="h-4" />
          </button>
        </div>
        <div className="flex p-4 justify-between border-b-2">
          <h4 className="font-medium text-sm">
            Is ClearLink compatible with other video conferencing platforms?
          </h4>
          <button>
            {" "}
            <PlusCircleIcon className="h-4" />
          </button>
        </div>
        <div className="flex p-4 justify-between border-b-2">
          <h4 className="font-medium text-sm">
            How does ClearLink ensure the security of my video conferences?
          </h4>
          <button>
            {" "}
            <PlusCircleIcon className="h-4" />
          </button>
        </div>
        <div className="flex p-4 justify-between border-b-2">
          <h4 className="font-medium text-sm">
            Do I need to download any software to use ClearLink?
          </h4>
          <button>
            {" "}
            <PlusCircleIcon className="h-4" />
          </button>
        </div>
        <div className="flex p-4 justify-between">
          <h4 className="font-medium text-sm">
            What kind of customer support does ClearLink provide?
          </h4>
          <span>
            {" "}
            <PlusCircleIcon className="h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;
