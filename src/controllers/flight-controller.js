const {flightService}=require('../services/index');

const FlightService=new flightService();


const create=async(req,res)=>{
    try
    {
     const flight=FlightService.createFlight(req.body);
     return res.status(201).json({
           data:flight,
           success:true,
           message:'Successfully created a flight',
           error : {}
     });
    }
    catch (error) {
    console.log(error);
    return res.send(500).json({
        data : {},
        success:false,
        message:'Not able to create a flight',
        err:error
    })
}
}


module.exports={
    create
}