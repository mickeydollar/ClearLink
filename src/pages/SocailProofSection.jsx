import React from "react";
import shopify from "../images/Shopify.png";
import coinbase from "../images/Coinbase.png";
import dropbox from "../images/Dropbox.png";
import intercom from "../images/Intercom.png";
import marvel from "../images/Marvel.png";
import automatic from "../images/Automattic.png";

const SocailProofSection = () => {
  return (
    <div className="container text-center md:mb-16">
      <p className="md:text-gray-600 font-medium md:text-sm">
        Join 1,500+ companies already vidoe conferencing the ClearLink way
      </p>
      <div className="md:flex justify-between mb-10 p-10">
        <img src={shopify} className="h-6" alt="" />
        <img src={coinbase} className="h-6" alt="" />
        <img src={dropbox} className="h-6" alt="" />
        <img src={intercom} className="h-6" alt="" />
        <img src={marvel} className="h-6" alt="" />
        <img src={automatic} className="h-4" alt="" />
      </div>
    </div>
  );
};

export default SocailProofSection;
