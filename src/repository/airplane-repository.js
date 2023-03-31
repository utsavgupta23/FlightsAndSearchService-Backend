const {Airplane}= require('../models/index');

class AirplaneRepositroy
{
     async getAirplane(id)
     {
        try
        {
          const airplane=Airplane.findByPk(id);
          return airplane; 
        }
        catch(error){
            console.log('error in finding airplane by id');
            throw {error};
        }
     }

}

module.exports=AirplaneRepositroy;