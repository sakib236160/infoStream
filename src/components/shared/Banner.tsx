import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import banner from "@/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image Section */}
        <div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden">
            <Image
              src={banner} 
              alt="OpenAI News"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            OpenAI Is Growing Fast and Burning Through Piles of Money
          </h2>
          <p className="text-gray-700 mb-4">
            OpenAI monthly revenue hit US$300 million in August, up 1,700% since
            the beginning of 2023, and the company expects about $3.7 billion in
            annual sales this year, according to financial documents reviewed by
            The New York Times.
          </p>
          <p className="text-gray-700 mb-6">
            OpenAI estimates that its revenue will balloon to $1.6 billion next
            year. OpenAI revenue in August more than tripled from a year
            earlier, according to the documents, and about 350 million people —
            up from around 100 million in March of this year — used its services
            each month as of June.
          </p>
          <Button className="bg-gray-900 w-full text-white font-semibold py-2 px-6 rounded-lg self-start hover:bg-gray-700 transition duration-300">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
