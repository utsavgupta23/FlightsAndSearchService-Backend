const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverconfig');




const setupAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        //.dotenv helps to setup the environment files
        console.log(`Server Started at ${PORT}`);

        
    })
    
}

setupAndStartServer();