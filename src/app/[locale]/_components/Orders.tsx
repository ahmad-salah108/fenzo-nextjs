import React from "react";

export default function Orders() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <img
          src="/assets/icons/bag.svg"
          alt="Orders"
        />
        <span className="text-[2rem] font-black leading-none">1K+</span>
      </div>

      <p className="text-[0.7rem] text-gray-700 pt-2">
        <span className="text-main">Orders</span> Ipsum is simply dummy <br />
        text of the printing and
      </p>
    </div>
  );
}
