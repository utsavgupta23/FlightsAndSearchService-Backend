const CrudService=require('./crud-service');
const {Airportrepository}=require('../repository/index');


class AirportService extends CrudService
{
    constructor()
    {
          const airportrepository=new Airportrepository();
          super(airportrepository);
    }


}


module.exports=AirportService;