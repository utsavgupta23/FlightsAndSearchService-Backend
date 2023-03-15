const express=require('express');
const {PORT}=require('./config/serverconfig');

const setupAndStartServer=async ()=>{
    const app=express();
    app.listen(PORT,()=>{
        //.dotenv helps to setup the environment files
        console.log(`Server Started at ${PORT}`);
        
    })
    
}

setupAndStartServer();