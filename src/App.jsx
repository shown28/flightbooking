import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PremiumFlights from './components/PremiumFlights'
import SearchFlights from './components/SearchFlights'
import { use } from 'react'

function App() {
  const [flightData, setFlightData] = useState([]);
  const [dummyFlightData, setDummyFlightData] = useState();
  // setData(hdata)
  console.log(dummyFlightData);
  return (
    <>
      <Header
        setFlightData={setFlightData}
        setDummyFlightData={setDummyFlightData}
      />
      <div className=" w-full  pt-3 bg-slate-100">
        <PremiumFlights />
        <SearchFlights
          flightData={flightData}
          setDummyFlightData={setDummyFlightData}
          dummyFlightData={dummyFlightData}
        />
      </div>
    </>
  );
}

export default App;
