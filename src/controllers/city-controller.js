const {CityService}=require('../services/index');

const CityService=new CityService();

//POST req
const create= async (req,res)=>{

   
    try {
        const city=await CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            error: {}


        });
    } catch (error) {
        console.log(error);
        return res.send(500).json({
            data : {},
            success:false,
            message:'Not able to create a city',
            err:error
        })
    }


}


//delete req  id
const destroy=async (req,res)=>{
    try {
        const response=await CityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted a city',
            error: {}


        });
    } catch (error) {
        console.log(error);
        return res.send(500).json({
            data : {},
            success:false,
            message:'Not able to delete a city',
            err:error
        })
    }
}

const get=async (req,res)=>{
    try {
        const response=await CityService.getCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully fetched the  city',
            error: {}


        });
    } catch (error) {
        console.log(error);
        return res.send(500).json({
            data : {},
            success:false,
            message:'Not able to get a city',
            err:error
        })
    }
}

const update=async (req,res)=>{
    try {
        const city=await CityService.createCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully updated a city',
            error: {}


        });
    } catch (error) {
        console.log(error);
        return res.send(500).json({
            data : {},
            success:false,
            message:'Not able to update a city',
            err:error
        })
    }
}


module.exports={
    create,
    destroy,
    get,
    update
}