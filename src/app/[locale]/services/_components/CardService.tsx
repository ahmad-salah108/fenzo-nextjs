import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardService() {
  return (
    <div className="w-[250px] mx-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
      <div>
        <Image
          src="/assets/images/card-image2.png"
          alt="Card Image"
          width={250}
          height={100}
        />
      </div>
      <div className="px-6 py-15 relative">
        <Link href={"/services/1"}>
          <div className="w-15 h-15 rounded-full border-3 border-white absolute -top-6 left-1/2 -translate-x-1/2 bg-main flex justify-center items-center">
            <img src="/assets/icons/arrow.svg" />
          </div>
        </Link>
        <h1 className="font-semibold text-lg leading-5 text-center">
          Wedding Service
        </h1>
        <p className="text-gray-400 text-xs text-center">Service Supplier</p>
        <p className="text-sm text-center pt-5 text-muted-foreground font-light leading-6 line-clamp-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
}

export default CardService;
