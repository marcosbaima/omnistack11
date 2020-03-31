const connection=require('../database/connection');

module.exports={
    async index(request,response){
            const configs= await  connection('t_config_ongs').select('*');
        
            return response.json(configs);
        },
        
    async create(request,response){
        
        const {bank,acount_number,tp_acount,ag_number,ong_id}=request.body;


    await connection('t_config_ongs').insert({
        bank,
        acount_number,
        tp_acount,
        ag_number,
        ong_id
    })
        return response.json({id});
    }
};