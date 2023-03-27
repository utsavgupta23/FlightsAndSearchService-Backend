const {Cityrepository}=require('../repository/index');



class Cityservice {
    constructor()
    {
       this.cityRepository=new Cityrepository();
    }


   
   async createCity(data)
   {

    try {

        const city=await this.cityRepository.createCity(data);
        return city;

        
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
   }

   async updateCity(cityId,data)
   {
       
    try {
        const city=await this.cityRepository.updateCity(cityId,data);
        return city;

    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
   }

   async deleteCity(cityId)
   {
    
    try {

        const response=await this.cityRepository.deleteCity(cityId);
        return response;

        
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
   }


   async getCity(cityId)
   {

      const city=await this.cityRepository.getCity(cityId);
      return city;
    
    try {
        
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
   }



}


module.exports=Cityservice;