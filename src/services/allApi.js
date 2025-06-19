import SERVERURL from "./serverUrl";
import commonApi from "./commonApi"; 

export const addFlight = async(flightDetails)=>{
    return await commonApi(`POST`,`${SERVERURL}/flightlist`,flightDetails)
}
export const allFlightApi = async()=>{
    return await commonApi('GET',`${SERVERURL}/flightlist`)
}