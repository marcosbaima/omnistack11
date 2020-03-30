const request = require('supertest');
const app= require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=> {
    beforeEach( async ()=> {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afteAll( async ()=> {
        await connection.destroy();
    });
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name:"Comunidade CN",
                email:"contato@cn.com.br",
                whatsapp:"85999999999",
                address_1:"Cxxxx",
                address_2:"CExxxxx",
                address_3:"CExxx",
                neighborhood:"açskçks",
                city:"Fortaleza",
                uf:"CE"
            });
            expect(response.body).toHaveProporty('id');
            expect(response.body.id).toHaveLength(8);
    });
});