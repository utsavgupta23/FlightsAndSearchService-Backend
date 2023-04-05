const {Airport}=require('../models/index.js');
const CrudRepository=require('./crud-repository')


class AirportRepository extends CrudRepository
{
    constructor()
    {
      super(Airport);
    }
   
}
module.exports=AirportRepository;