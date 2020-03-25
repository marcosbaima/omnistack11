const crypto=require('crypto');

const connection=require('../database/connection');

module.exports={
    async index(request,response){
            const ongs= await  connection('t_ongs').select('*');
        
            return response.json(ongs);
        },
        
    async create(request,response){
        const {name,email,whatsapp,address_1,address_2,address_3,neighborhood,city,uf}=request.body;

    const id=crypto.randomBytes(4).toString('HEX');

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