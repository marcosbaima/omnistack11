const express = require('express');

const { celebrate, Segments, Joi} = require('celebrate');

const OngController=require('./controlers/OngController');
const IncidentController=require('./controlers/IncidentController');
const ProfileController=require('./controlers/ProfileController');
const SessionController = require('./controlers/SessionController');
const ConfigOngsControle = require('./controlers/ConfigOngsController');


const routes=express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        address_1:Joi.string().required(),
        address_2:Joi.string().required(),
        address_3:Joi.string().required(),
        neighborhood:Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),OngController.create);
routes.get('/configs',ConfigOngsControle.create);
routes.post('/configs',ConfigOngsControle.create);
routes.get('/profile',ProfileController.index);
routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);

routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })    
}),IncidentController.delete);


module.exports=routes;

