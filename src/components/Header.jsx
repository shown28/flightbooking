import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";
import "../App.css";


const Header = () => {
    // for menu bar
  const [isOpen, setIsOpen] = useState(false);
  // for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // height:900,

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      {/* modal */}
      <div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Flight
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Flight Name / Airline
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="flightName"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Flight Number (eg:AIC105)
            
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="flightNumber"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Departure City
                    
                  </label>

                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="departureCity"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                     
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Arrival City
                    
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="arrivalCity"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Departure Date
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="departureDate"
                      type="date"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Arrival Date
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="arrivalDate"
                      type="date"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Departure Time
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="departureTime"
                      type="time"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                     
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Arrival Time
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="arrivalTime"
                      type="time"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                     
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="price"
                      type="number"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      
                    />
                  </div>
                </div>

                <button
                 
                  className="bg-blue-400 py-1 px-3 rounded disabled:cursor-not-allowed text-white hover:text-blue-400 hover:bg-white mt-5"
                 
                >
                  Add flight
                </button>
                <button
                  className="border py-1 px-3 rounded text-blue-400 hover:text-white ml-2 hover:bg-blue-400  mt-5"
        
                >
                  Cancel
                </button>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
      {/* nav bar */} {/* navigation large screen  */}
      <div className="w-full md:flex justify-between items-center py-2 px-2 hidden top-0 z-10 bg-white fixed">
        {/* logo */}
        <div className="flex flex-col items-center">
          <span className="font-bold text-3xl  text-blue-500 fredoka">
            <span className="fredoka text-blue-800">Book</span> Flights
          </span>
          <span className="font-light text-xs text-blue-600">
            Flight Booking Agency
          </span>
        </div>

        <div>
          <ul className="flex items-center  ">
            <li className="mr-4 hover:text-blue-500">
              <a href="">My Booking</a>
            </li>
            <li className="mr-4 hover:text-blue-500">
              <a href="">Tour & attractions</a>
            </li>
            <li className="mr-4 hover:text-blue-500">
              <a href="">Register/Login</a>
            </li>
            <li className="mr-4 hover:text-blue-500">
              <button
                className="bg-blue-400 py-1 px-3 rounded text-white hover:text-blue-400 hover:bg-white"
                onClick={handleOpen}
              >
                Add flight
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* for mobile */}
      <div className="md:hidden bg-blue-50 fixed top-0 z-10 w-full ">
        <div className="flex justify-between px-3 border-t-cyan-500	 py-2">
          {/* logo */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl  text-blue-500 fredoka">
              <span className="fredoka text-blue-800">Book</span> Flights
            </span>
            <span className="font-light text-xs text-blue-600">
              Flight Booking Agency
            </span>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <i className="fa-solid fa-square-xmark text-4xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-3xl"></i>
            )}
          </button>
        </div>

        {/* navigation */}

        {isOpen && (
          <div>
            <ul className="text-2xl mt-8 px-2 ">
              <li className="mr-4 hover:text-blue-500 my-3">
                <a href="#" className="hover:text-blue-500">
                  My Booking
                </a>
              </li>
              <li className="mr-4 hover:text-blue-500 my-3">
                <a href="#">Tour & attractions</a>
              </li>
              <li className="mr-4 hover:text-blue-500 my-3">
                <a href="#">Register/Login</a>
              </li>
              <li className="mr-4 pb-7 hover:text-blue-500 my-3">
                <button
                  className="bg-blue-400 py-1 px-3 rounded text-white hover:text-blue-400 hover:bg-white"
                  onClick={handleOpen}
                >
                  Add flight
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Header