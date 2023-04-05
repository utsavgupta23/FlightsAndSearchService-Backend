const {airportService}=require('../services/index');

const AirportService=new airportService();

const create= async (req,res)=>{

   
    try {
        
        const airport=await AirportService.create(req.body);
       
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Successfully created a airport',
            error: {}


        });
    } catch (error) {
        console.log(error);
        return res.send(500).json({
            data : {},
            success:false,
            message:'Not able to create a airport',
            err:error
        })
    }


}

module.exports={
    create
}