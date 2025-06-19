import { useEffect, useState } from "react";
import Flights from "./Flights";
import { Button, TextField } from "@mui/material";
import { addFlight, allFlightApi } from "../services/allApi";

const SearchFlights = ({ flightData, dummyFlightData, setDummyFlightData }) => {
  
    const [searchFligth, setSearchFlight] = useState({
    from: "",
    to: "",
    date: "",
  });

//   function search flight
  const handleSearch = () => {
    const { from, to, date } = searchFligth;

    if (!from || !to || !date) {
      alert("please fill the form completly");
    } else if (from == to) {
      alert("Both destination should not be equal");
    } else {
      const searchResult = flightData.filter((data) => {
        if (
          data.departureCity.toLowerCase() == from.toLowerCase() &&
          data.arrivalCity.toLowerCase() == to.toLowerCase() &&
          data.departureDate == date
        ) {
          return data;
        }
      });

      setDummyFlightData(searchResult);
    }
  };

//   cancel search
  const handleCancelSearch = () => {
    setDummyFlightData(flightData);
  };
  return (
    <>
      <div className="w-full flex md:justify-center flex-col md:flex-row bg-blue-400 px-5 py-10 mb-15">
        <div className="mr-4 mb-2 md:mb-0">
          <TextField
            className="bg-white rounded mb-10  "
            id="filled-basic"
            label="From"
            variant="filled"
            onChange={(e) =>
              setSearchFlight({ ...searchFligth, from: e.target.value })
            }
          />
        </div>
        <div className="mr-4 mb-2 md:mb-0">
          <TextField
            className="bg-white rounded"
            id="filled-basic"
            label="To"
            variant="filled"
            onChange={(e) =>
              setSearchFlight({ ...searchFligth, to: e.target.value })
            }
          />
        </div>
        <div className="md:mr-4 mb-2 md:mb-0">
          <TextField
            className="bg-white rounded"
            id="filled-basic"
            variant="filled"
            type="date"
            onChange={(e) =>
              setSearchFlight({ ...searchFligth, date: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-pink-600 px-3 py-4  rounded text-white hover:bg-pink-300  border border-pink-600"
        >
          Search
        </button>
        <button
          className="px-2 py-4 md:mt-0 md:ml-3 mt-2 text-white hover:bg-pink-600 border border-white hover:border-pink-600 rounded"
          onClick={handleCancelSearch}
        >
          Clear
        </button>
      </div>
      <Flights flightData={flightData} dummyFlightData={dummyFlightData} />
    </>
  );
};

export default SearchFlights;
