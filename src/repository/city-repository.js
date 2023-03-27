const {City}=require('../models/index');

class CityRepository{
     
   async createCity({name})
   {
        try {
            const city=await City.create({
                name : name
            });
            return city;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw {error};
        }
   }

 
   async getCity(cityId)
   {
       try {
           const city=await findByPK(cityId);
           return city;
       } catch (error) {
            console.log('Something went wrong in repository layer');
            throw {error};
       }
   }

   async updateCity(cityId,data) //data will be key value pair {name:Prayagraj}
   {
      try {
        
        const city=await City.update(data, {
            where:{
                id:cityId
            }

          }
        )
        return city;

      } catch (error) {
        console.log('Something went wrong in repository layer');
        throw {error};
      }
   }


   async deleteCity(cityId)
   {
     try {

        await City.destroy({
            where:{
                id:cityId
            }
        })
        return true;
     } catch (error) {
        console.log('Something went wrong in repository layer');
        throw {error};
     }
   }

}


module.exports=CityRepository;