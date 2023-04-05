class CrudService
{
   constructor(repository)
   {
     this.repository=repository;
   }


   async create(data)
   {
       try {
        
           const res=await this.repository.create(data);
           return res;
       } catch (error) {
           console.log('something went wrong in crud-service layer');
           throw {error};
       }
   }

   async get(id)
   {
         try {
            const res=await this.repository.get(id);
           return res;
           
       } catch (error) {
           console.log('something went wrong in crud-service layer');
           throw {error};
       }
   }

async getAll()
{
    try {
        const res=await this.repository.getAll();
        return res;
        
    } catch (error) {
        console.log('something went wrong in crud-service layer');
        throw {error};
    }
}

   async destroy(id)
   {
      try {
        const res=await this.repository.destroy(id);
        return res;

      } catch (error) {
        console.log('something went wrong in crud-service layer');
        throw {error};
      }
    }

   async update(id,data)
   {
    try {
        const res=await this.repository.update(id,data);
        return res; 
    } catch (error) {
        console.log('something went wrong in crud-service layer');
        throw {error};
    }
   }

}


module.exports=CrudService;