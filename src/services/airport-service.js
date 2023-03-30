const {Cityrepository, Airportrepository}=require('../repository/index');



class AirportService
{
    constructor()
    {
          this.airportrepository=new Airportrepository();
    }
    

    async createAirport(data)
    {
 
     try {
         
          const airport=await this.airportrepository.createAirport(data);
          return airport;
        
         
     } catch (error) {
         console.log("Something went wrong at service layer");
         throw {error};
     }
    }

}


module.exports=AirportService;