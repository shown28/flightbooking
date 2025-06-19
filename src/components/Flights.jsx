import { duration, Slider } from "@mui/material";
import { useEffect, useState } from "react";

const Flights = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        {/* filter section */}
        <div className=" px-10">
          {/* range */}
          <div className="flex flex-col">
            <span className="text-slate-600">Range: ₹</span>
            <Slider
              size="small"
              defaultValue={70}
              min={1000}
              max={20000}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </div>
          {/* travel time  */}
          <div className="my-10">
            <span className="text-slate-600 ">Travell Duration</span>
            <div className="flex mt-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-600">Min Time</span>
                <input
                  id="first-name"
                  type="time"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="flex flex-col ml-2 ">
                <span className="text-xs text-slate-600 ">Max Time</span>
                <input
                  id="first-name"
                  type="time"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          {/* flight names */}
          <div>
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
            />
            <label htmlFor="">Indigo</label>
          </div>
          <button className="bg-blue-400 px-5 rounded py-3 text-slate-100 hover:bg-transparent hover:text-blue-400 border border-blue-400 mt-5">
            {" "}
            Filter
          </button>
        </div>

        {/* fight details section */}
        <div className="md:col-span-2 ">
          {/* sorting section */}
          <div className="w-full  mb-5 flex justify-around">
            <button className="p-1 bg-white rounded border border-blue-200 ">
              Cheapest flights
            </button>
            <button className="p-1 bg-white rounded border border-blue-200 mx-1 ">
              Shortest flights
            </button>
            <button className="p-1 bg-white rounded border border-blue-200 ">
              Flights in Alphabetic order
            </button>
          </div>

          {/* flights info section */}

          <div className="flex flex-col bg-white md:flex-row items-center justify-center md:mr-3  border border-slate-200  rounded shadow md:px-10 py-5 md:py-20 mb-2">
            {/* flight name */}
            <span className="md:text-4xl flex flex-col text-2xl  font-bold md:w-50 mb-10 md:mb-0">
              <span className="">Air india</span>
              <span className="font-thin text-2xl">AC973</span>
            </span>
            {/* flight details */}
            
            
              <div className="md:w-80 flex">
                <div className="flex flex-col items-end">
                  <span className="font-bold">09:10</span>
                  <span className="font-bold text-xl">Kochi</span>
                </div>

                <div className="flex flex-col items-center">
                <span className="mx-10 font-thin">Duration: 01:00 hr</span>
                  <span className="text-xs  "> ─────────────────</span>
                   <div className="text-slate-800">10-6-2025</div>
                </div>

                <div className="flex flex-col items-start">
                  <span className="font-bold">10:30</span>
                  <span className="font-bold text-xl">Kollam</span>
                </div>
              </div>
             
            

            <div className="flex flex-col md:items-start md:w-50 px-2 py-5 md:items-start  md:ml-2 md:px-5 bg-slate-100">
              <span className="text-xl font-thin">
                Rs <span className="font-normal">8000</span>
              </span>
              <span className=" text-green-800">Refundable with charges</span>
              <button className="bg-pink-600 px-2 py-2 rounded text-white hover:text-pink-600 hover:bg-white border border-pink-600 mt-4">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
