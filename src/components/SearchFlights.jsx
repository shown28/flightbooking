import { useEffect, useState } from "react";
import Flights from "./Flights";
import { Button, TextField } from "@mui/material";


const SearchFlights = () => {
  return (
     <>
      <div className="w-full flex md:justify-center flex-col md:flex-row bg-blue-400 px-5 py-10 mb-15">
        <div className="mr-4 mb-2 md:mb-0">
          <TextField
            className="bg-white rounded mb-10  "
            id="filled-basic"
            label="From"
            variant="filled"
          />
        </div>
        <div className="mr-4 mb-2 md:mb-0">
          <TextField
            className="bg-white rounded"
            id="filled-basic"
            label="To"
            variant="filled"
          />
        </div>
        <div className="md:mr-4 mb-2 md:mb-0">
          <TextField
            className="bg-white rounded"
            id="filled-basic"
            variant="filled"
            type="date"
          />
        </div>
        <button
       
          className="bg-pink-600 px-3 py-4  rounded text-white hover:bg-pink-300 hover:text-pink-600 border border-pink-600"
        >
          Search
        </button>
        <button className="px-2 py-4 md:mt-0 md:ml-3 mt-2 text-white hover:bg-pink-600 border border-white hover:border-pink-600 rounded" >Cancel</button>
      </div>
      <Flights  />
    </>
  )
}

export default SearchFlights