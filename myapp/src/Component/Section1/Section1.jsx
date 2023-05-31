import React from "react";
import secImg from '../Section1/Section1.png'
import Button from "./Button/Button";
const Section1 = () => {
  return (
    <div className="flex justify-around items-center bg-red-700 h-[80vh] m-4 rounded-md  shadow-2xl ">
      <div className=" ">
        <h1 className="text-xl font-bold w-[80%]  ">Earn your dream revenue by  reaching more customers on Google</h1>
        <div className="flex gap-4 w-96 ml-10 mt-6 ">
          <div className="font-bold">Logo</div>
          <div>
            <p className="w-72">
              Make your products available to every single person who shop on
              Google every day
            </p>
          </div>
        </div>
        <div className="flex gap-4  w-96 ml-10  mt-4 ">
          <div className="font-bold">Logo</div>
          <div>
            <p className="w-72">
              Reach more potential customers by promoting your products with
              Google Shopping Ads
            </p>
          </div>
        </div>
        <div className="flex gap-4  w-96 ml-10 mt-5 ">
          <div className="font-bold">Logo</div>
          <div>
            <p  className="w-72">
              Manage and optimize your products listing directly through Shopify
            </p>
          </div>

         
        </div>
        <Button/>
      </div>

      <div>
        <img src={secImg} className="h-[80vh]" alt="" />
      </div>
    </div>
  );
};

export default Section1;
