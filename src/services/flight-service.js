const  {FlightRepository,AirplaneRepositroy}=require('../repository/index');

class FlightService
{
    constructor()
    {
        this.airplaneRepositroy=new AirplaneRepositroy();
        this.flightRepository=new FlightRepository();
    }
    async createFlight(data)
    {
        try{
            const airplane=await  this.airplaneRepositroy.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        }
        catch(error){
            console.log('Something went wrong in Flightrepository layer');
            throw {error};
        }
       
    }


    async getAllFlights(data)
    {
        try{
            console.log('FJF');
            const flights=await  this.flightRepository.getAllFlights(data);
            return flights;
        }
        catch(error){
            console.log('Something went wrong in Flightrepository layer');
            throw {error};
        }
    }
}


module.exports=FlightService;
/*
   flightNumber
 * airplaneId
 * departureAirportId
 *  arrivalAirportId
 * arrivalTime
 * departureTime
 *  price
 * totalSeats
 */