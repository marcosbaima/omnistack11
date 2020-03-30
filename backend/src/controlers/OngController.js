const generateUniqueId=require('../utils/generateUniqueId');

const connection=require('../database/connection');

module.exports={
    async index(request,response){
            const ongs= await  connection('t_ongs').select('*');
        
            return response.json(ongs);
        },
        
    async create(request,response){
        const {name,email,whatsapp,address_1,address_2,address_3,neighborhood,city,uf}=request.body;

    const id=generateUniqueId();

    await connection('t_ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
        address_1,
        address_2,
        address_3,
        neighborhood,
    })
        return response.json({id});
    }
};