const {Airport,City}=require('../models/index.js');


class AirportRepository{

    async createAirport(data){
        try {
             
            //  const airport=await Airport.create({
            //     name:data.name,
            //     address:data.address,
            //     //cityId:9
            //     cityId:await City.findAll({
            //         attributes:['id'],
            //         where:{
            //             name:data.cityname
            //         }
            //     })
                
            //  })

            const p=await City.findAll({
                attributes:['id'],
                where:{
                    name:data.cityname
                },
                raw: true,
                nest: true 
            })
            const airport=await Airport.create({
                name:data.name,
                address:data.address,
                //cityId:9
                cityId:p[0].id
                
             })

            
            return airport;

        } catch (error) {
            console.log('Something went wrong in the Airport createtrepo');
            throw{error};
        }
    }








}


module.exports=AirportRepository;